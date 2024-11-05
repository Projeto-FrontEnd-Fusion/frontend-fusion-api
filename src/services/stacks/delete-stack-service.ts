import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { left, right } from '@/shared/either';

export async function DeleteStackService(stackId: string) {
  const prisma = await PrismaHelper.getPrisma();

  try {
    const deletedStack = await prisma.stack.delete({
      where: {
        id: stackId,
      },
    });

    if (deletedStack) {
      return right(deletedStack);
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return left(new Error(error.message));
    }
  }
}
