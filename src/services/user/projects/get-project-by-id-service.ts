import { ProjectModel } from '@/models/project-model';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';

export async function GetProjectByIdService(id: string): Promise<ProjectModel | any> {
  const prisma = await PrismaHelper.getPrisma();
  const projectOrNull = await prisma.project.findUnique({ where: { id: id } });

  return projectOrNull;
}
