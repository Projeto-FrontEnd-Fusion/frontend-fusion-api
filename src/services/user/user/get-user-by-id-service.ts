import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetUserByIdService(userId: string): Promise<any | null> {
  const prisma = await PrismaHelper.getPrisma();
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user;
}
