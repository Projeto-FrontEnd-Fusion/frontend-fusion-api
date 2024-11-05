import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { left, right } from '@/shared/either';

export async function GetStackByIdService(stackId: string) {
  const prisma = await PrismaHelper.getPrisma();
  try {
    const stackOrNull = await prisma.stack.findUnique({
      where: { id: stackId },
    });

    if (stackOrNull) {
      return right(stackOrNull);
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return left(new Error(error.message));
    }
  }
}
