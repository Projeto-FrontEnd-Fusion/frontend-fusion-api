import { makeHashGeneratorAdapter } from '@/factories/infra/cryptography/bcrypt/hash-generator-adapter';
import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

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

// TODO: create error messages
export async function LoginService(
  data: LoginServiceDTO,
  session: SessionDTO
): Promise<void> {
  const prisma = await PrismaHelper.getPrisma();

  const userExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!userExists) {
    console.log('User not registered');
    return;
  }

  const passwordMatches = makeHashGeneratorAdapter().matches(
    data.password,
    userExists.password
  );

  if (!passwordMatches) {
    console.log('Wrong password');
    return;
  }

  const id = makeUuidAdapter().build();
  const ip = session.ip;

  await prisma.session.upsert({
    where: { id: id },
    create: {
      id: id,
      userId: userExists.id,
      ip: ip,
      userAgent: session.userAgent || '',
      active: true,
      updatedAt: new Date().toString(),
      createdAt: new Date().toString(),
    },
    update: {
      ip: {
        set: ip,
      },
      userAgent: {
        set: session.userAgent,
      },
      updatedAt: {
        set: new Date().toString(),
      },
    },
  });
  // await prisma.session.delete({ where: { id: id } });

  console.log(session.ip, session.userAgent);
}
