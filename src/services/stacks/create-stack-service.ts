import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { UniqueConstrainFailedError } from '@/errors/prisma';
import { makeUuidAdapter } from '@/factories/infra/id';
import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { left, right } from '@/shared/either';
import { PrismaClientErrorCodes } from '@/types/prisma/prisma-errors';

export type CreateStackDTO = {
  name: string;
};

export async function CreateStackService(data: CreateStackDTO) {
  const prisma = await PrismaHelper.getPrisma();
  try {
    const createdStack = await prisma.stack.create({
      data: {
        id: makeUuidAdapter().build(),
        name: data.name,
        createdAt: new Date().toISOString(),
      },
    });

    return right(createdStack);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == PrismaClientErrorCodes.UniqueConstrainFailedError) {
        return left(new UniqueConstrainFailedError(error.message));
      }
    }

    return left(new Error('Error Creating Stack'));
  }
}
