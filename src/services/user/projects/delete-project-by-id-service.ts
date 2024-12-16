import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { left, right } from '@/shared/either';

export async function DeleteProjectByIdService(projectId: string) {
  const prisma = await PrismaHelper.getPrisma();

  try {
    await prisma.project.delete({ where: { id: projectId } });

    if (await prisma.project.findUnique({ where: { id: projectId } })) {
      return right();
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.log(error);
    }

    return left(new Error('Error'));
  }
}
