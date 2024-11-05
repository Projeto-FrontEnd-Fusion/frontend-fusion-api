import { WrongPasswordError } from '@/errors/account';
import { UserNotFoundedError } from '@/errors/user';
import { makeHashGeneratorAdapter } from '@/factories/infra/cryptography/bcrypt/hash-generator-adapter';
import { makeJwtSignInAdapter } from '@/factories/infra/cryptography/jwt-sign-in-adapter-factory';
import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { UserModel } from '@/models';
import { Either, left, right } from '@/shared/either';
import { userAgent } from 'next/server';

// 1. verify if user exists
// 2. verify if password matches
// 3. if matches, create a new session
// 4. update session model with user informations
// 5. return jwt token and status code ok
// 6. if wrong return error 404 with personalized error
// wrong username, wrong password

interface LoginServiceDTO {
  email: string;
  password: string;
}

interface SessionDTO {
  ip?: string;
  userAgent?: string;
}

export type LoginServiceDataResponse = {
  token: string;
};

export type LoginServiceResponse = Promise<
  Either<UserNotFoundedError | WrongPasswordError, LoginServiceDataResponse>
>;

// TODO: create error messages
export async function LoginService(
  data: LoginServiceDTO,
  session: SessionDTO
): LoginServiceResponse {
  const prisma = await PrismaHelper.getPrisma();

  const userExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!userExists) {
    return left(new UserNotFoundedError());
  }

  const passwordMatches = makeHashGeneratorAdapter().matches(
    data.password,
    userExists.password
  );

  if (!passwordMatches) {
    return left(new WrongPasswordError());
  }

  const id = makeUuidAdapter().build();
  const ip = session.ip;

  const userSession = await prisma.session.findFirst({
    where: {
      ip: ip,
      userId: userExists.id,
    },
  });

  if (!userSession) {
    const newSession = await prisma.session.create({
      data: {
        id: id,
        userId: userExists.id,
        ip: ip,
        userAgent: session.userAgent || '',
        active: true,
        createdAt: new Date().toISOString(),
      },
    });
  } else {
    await prisma.session.updateMany({
      where: {
        active: true,
      },
      data: {
        active: false,
        updatedAt: new Date().toISOString(),
      },
    });

    const updatedSession = await prisma.session.update({
      where: {
        id: userSession.id,
      },
      data: {
        active: true,
        userAgent: session.userAgent || undefined,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  console.log(session.ip, session.userAgent);

  const token = makeJwtSignInAdapter().execute(userExists.id, userExists.email);

  return right({ token: token });
}
