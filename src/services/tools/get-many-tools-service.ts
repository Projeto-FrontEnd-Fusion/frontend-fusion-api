import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { makePrismaHelperAdapter } from '@/factories/infra/prisma/prisma-helper-adapter-factory';
import { right, left } from '@/shared/either';

export async function GetManyToolsService() {
  const prisma = await makePrismaHelperAdapter();
  try {
    const tools = await prisma.tool.findMany({});

    return right(tools);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return left(new Error(error.message));
    }

    return left(new Error('Unknow Error'));
  }
}
