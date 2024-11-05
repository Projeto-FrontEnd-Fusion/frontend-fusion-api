import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { ProjectModel } from '@/models';
import { makeUuidAdapter } from '@/factories/infra/id';
import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { PrismaClientErrorCodes } from '@/types/prisma/prisma-errors';
import { left, right } from '@/shared/either';
import { UniqueConstrainFailedError } from '@/errors/prisma';

export async function CreateProjectService(
  project: ProjectModel
): Promise<any | null> {
  const prisma = await PrismaHelper.getPrisma();
  try {
    const createdProject = await prisma.project.create({
      data: {
        id: makeUuidAdapter().build(),
        title: project.title,
        url: project.url,
        createdAt: new Date().toISOString(),
      },
    });

    return right(createdProject);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == PrismaClientErrorCodes.UniqueConstrainFailedError) {
        return left(new UniqueConstrainFailedError(error.message));
      }
    }
  }
}
