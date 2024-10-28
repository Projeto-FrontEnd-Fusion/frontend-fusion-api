import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function DeleteUserByIdService(userId: string) {
  console.log(userId);

  const prisma = await PrismaHelper.getPrisma();
  await prisma.session.deleteMany({
    where: {
      userId: userId,
    },
  });
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
}
