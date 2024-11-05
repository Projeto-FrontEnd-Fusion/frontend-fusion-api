import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { makePrismaHelperAdapter } from '@/factories/infra/prisma/prisma-helper-adapter-factory';
import { left, right } from '@/shared/either';

export async function DeleteToolByIdService(toolId: string) {
  const prisma = await makePrismaHelperAdapter();
  try {
    const deletedTool = await prisma.tool.findUnique({ where: { id: toolId } });

    return right(deletedTool);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError)
      return left(new Error(error.message));

    return left(new Error('Erro ao deletar Tool'));
  }
}
