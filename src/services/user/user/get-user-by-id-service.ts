import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetUserByIdService(): Promise<any | null> {
  const prisma = await PrismaHelper.getPrisma();
  const user = await prisma.user.findUnique({ where: { id: user id });

  return user;
}