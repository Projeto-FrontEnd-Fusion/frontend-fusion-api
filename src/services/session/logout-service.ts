import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

// 1. verify if user exists
// 2. exclude current session model data
// 3. return a status code ok

export async function LogoutService(sessionId: string) {
  const prisma = await PrismaHelper.getPrisma();
  await prisma.session.update({
    where: { id: sessionId, active: true },
    data: {
      active: false,
      updatedAt: new Date().toString(),
    },
  });
}
