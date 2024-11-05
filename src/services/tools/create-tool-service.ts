import { UniqueConstrainFailedError } from '@/errors/prisma';
import { makeUuidAdapter } from '@/factories/infra/id';
import { makePrismaHelperAdapter } from '@/factories/infra/prisma/prisma-helper-adapter-factory';
import { left, right } from '@/shared/either';
import { PrismaClientErrorCodes } from '@/types/prisma/prisma-errors';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export type CreateToolDTO = {
  name: string;
  careerId: string;
};

export async function CreateToolService(data: CreateToolDTO) {
  const prisma = await makePrismaHelperAdapter();

  try {
    const createdTool = await prisma.tool.create({
      data: {
        id: makeUuidAdapter().build(),
        ...data,
        createdAt: new Date().toISOString(),
      },
    });

    if (createdTool) {
      return right(createdTool);
    }

    return left(createdTool);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == PrismaClientErrorCodes.UniqueConstrainFailedError) {
        return left(new UniqueConstrainFailedError(error.message));
      }

      return left(new Error(error.message));
    }

    return left(new Error('Unknow error'))
  }
}
