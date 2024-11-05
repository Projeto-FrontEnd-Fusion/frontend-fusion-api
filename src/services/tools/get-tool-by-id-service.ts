import { ToolNotFoundedError } from '@/errors/tools';
import { makePrismaHelperAdapter } from '@/factories/infra/prisma/prisma-helper-adapter-factory';
import { left, right } from '@/shared/either';

export async function GetToolByIdService(toolId: string) {
  const prisma = await makePrismaHelperAdapter();
  const toolOrNull = await prisma.tool.findUnique({
    where: {
      id: toolId,
    },
  });

  if (toolOrNull) {
    return right(toolOrNull);
  }

  return left(new ToolNotFoundedError());
}
