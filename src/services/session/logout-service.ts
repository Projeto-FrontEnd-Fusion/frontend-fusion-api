import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function LogoutService(userId: string, sessionId: string) {
  const prisma = await PrismaHelper.getPrisma();

  const sessionActive = await prisma.session.findFirst({
    where: {
      userId: userId,
      active: true,
    },
  });

  let data;

  if (sessionActive) {
    data = await prisma.session.update({
      where: {
        id: sessionActive.id,
        userId,
      },
      data: {
        active: false,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  return data;
}
