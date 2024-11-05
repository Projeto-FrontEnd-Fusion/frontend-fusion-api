import {
  EmailAlreadyRegisteredError,
  UsernameAlreadyExistsError,
} from '@/errors/account';
import { makeHashGeneratorAdapter } from '@/factories/infra/cryptography/bcrypt/hash-generator-adapter';
import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { UserModel } from '@/models';
import { Either, left, right } from '@/shared/either';

interface CreateUserDTO {
  username: string;
  email: string;
  fullName: string;
  password: string;
  createdAt: string;
}

export type RegisterUserServiceResponse = Promise<
  Either<EmailAlreadyRegisteredError | UsernameAlreadyExistsError, UserModel>
>;

export async function RegisterUserService(
  data: CreateUserDTO
): RegisterUserServiceResponse {
  const prisma = await PrismaHelper.getPrisma();

  const emailExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (emailExists) {
    return left(new EmailAlreadyRegisteredError());
  }

  const usernameExists = await prisma.user.findFirst({
    where: { username: data.username },
  });

  if (usernameExists) {
    return left(new UsernameAlreadyExistsError());
  }

  const newUser = await prisma.user.create({
    data: {
      id: makeUuidAdapter().build(),
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      password: makeHashGeneratorAdapter().hash(data.password),
      createdAt: new Date().toISOString(),
    },
  });

  console.log(newUser);

  return right(newUser);
}
