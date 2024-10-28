import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function UpdateUserByIdService(userId: string, data: any) {
  const prisma = await PrismaHelper.getPrisma();
  const userOrNull = await prisma.user.update({
    where: { id: userId },
    data: { ...data },
  });
}
