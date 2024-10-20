import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetManyUsersService(): Promise<any[] | []> {
  const prisma = await PrismaHelper.getPrisma();
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      isVerified: true,
      createdAt: true,
    },
  });

  return users;
}
