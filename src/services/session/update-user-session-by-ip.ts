import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function UpdateUserSessionByIdService(
  userId: string,
  sessionId,
  data: any
) {
  const prisma = await PrismaHelper.getPrisma();
  await prisma.session.update({
    where: { id: sessionId, active: true, userId: userId },
    data: data,
  });
}
