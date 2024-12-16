import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { makePrismaHelperAdapter } from '@/factories/infra/prisma';
import { makeUuidAdapter } from '@/factories/infra/id';
import { left, right } from '@/shared/either';

export type CreateTeamDTO = {
  description?: string;
  name: string;
  coordinatorId?: string;
};

export async function CreateTeamService(data: CreateTeamDTO) {
  const prisma = await makePrismaHelperAdapter();

  try {
    const createdTeam = await prisma.team.create({
      data: {
        id: makeUuidAdapter().build(),
        name: data.name,
        description: data.description || null,
        createdAt: new Date().toISOString(),
        coordinatorId: data.coordinatorId || null,
      },
    });

    return right(createdTeam);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return left(new Error(error.message));
    }

    return left(new Error('Unknow Error'));
  }
}
