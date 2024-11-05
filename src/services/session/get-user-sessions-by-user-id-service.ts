import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function GetUserSessionsByUserIdService(userId: string) {
  const prisma = await PrismaHelper.getPrisma();
  const sessions = await prisma.session.findMany({
    where: { userId: userId },
  });

  return sessions;
}
