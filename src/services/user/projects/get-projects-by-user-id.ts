import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetProjectsByUserId(userId: string) {
  const prisma = await PrismaHelper.getPrisma();
  const projects = await prisma.user.findMany({
    where: { id: userId },
    select: {
      projects: true,
    },
  });

  return projects;
}
