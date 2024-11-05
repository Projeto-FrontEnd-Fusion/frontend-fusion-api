import { PrismaHelper } from '@/infra/db/prisma/helpers';

export async function GetManyStacksService() {
  const prisma = await PrismaHelper.getPrisma();
  const stacks = await prisma.stack.findMany({});

  return stacks;
}
