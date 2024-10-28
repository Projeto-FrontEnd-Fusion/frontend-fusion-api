import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function GetManyProjectsByUserIdService(userId: string) {
  const prisma = await PrismaHelper.getPrisma();
  const projects = await prisma.user.findMany({
    where: { id: userId },
    select: {
      projects: true,
    },
  });

  return projects;
}
