import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetUserSessions(userId: string) {
  const prisma = await PrismaHelper.getPrisma();
  const sessions = await prisma.session.findMany({
    where: { userId: userId },
  });

  return sessions;
}
