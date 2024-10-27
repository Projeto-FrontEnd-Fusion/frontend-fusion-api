import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function DeleteProjectByIdService(id: string): Promise<boolean> {
  const prisma = await PrismaHelper.getPrisma();
  const projectExists = await prisma.project.findUnique({ where: { id: id } });

  if (projectExists) {
    await prisma.project.delete({ where: { id: id } });

    return true;
  }

  return false;
}
