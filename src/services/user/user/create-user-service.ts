import { makeHashGeneratorAdapter } from '@/factories/infra/cryptography/bcrypt/hash-generator-adapter';
import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

interface CreateUserDTO {
  username: string;
  email: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  createdAt: string;
}

export async function CreateUserService(data: CreateUserDTO): Promise<void> {
  const prisma = await PrismaHelper.getPrisma();

  const emailExists = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (emailExists) {
    console.log('Email já registrado!');
    return;
  }

  const usernameExists = await prisma.user.findFirst({
    where: { username: data.username },
  });

  if (usernameExists) {
    console.log('Username já existe');
    return;
  }

  const newUser = await prisma.user.create({
    data: {
      id: makeUuidAdapter().build(),
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      password: makeHashGeneratorAdapter().hash(data.password),
      dateOfBirth: data.dateOfBirth,
      createdAt: new Date().toDateString(),
    },
  });

  console.log(newUser);
}
