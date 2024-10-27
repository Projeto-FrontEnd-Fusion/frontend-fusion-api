import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { makeUuidAdapter } from '@/factories/infra/id';
import { ProjectModel } from '@/models';

export async function CreateProjectService(
  project: ProjectModel
): Promise<any | null> {
  const prisma = await PrismaHelper.getPrisma();
  const result = await prisma.project.create({
    data: {
      id: makeUuidAdapter().build(),
      title: project.title,
      url: project.url,
    },
  });

  return result || null;
}
