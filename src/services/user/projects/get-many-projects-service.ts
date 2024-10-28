import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { ProjectModel } from '@/models/project-model';

export async function GetManyProjectsService(): Promise<ProjectModel[] | []> {
  const prisma = await PrismaHelper.getPrisma();
  const projects = await prisma.project.findMany();

  return projects || [];
}
