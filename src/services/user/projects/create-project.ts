import { ProjectModel } from '@/models/project-model';
import { makeUuidAdapter } from '../../../factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '../../../infra/db/prisma/helpers/prisma-helper';

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
