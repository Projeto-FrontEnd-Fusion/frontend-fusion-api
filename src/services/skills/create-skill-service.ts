import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { UniqueConstrainFailedError } from '@/errors/prisma';
import { makeUuidAdapter } from '@/factories/infra/id';
import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { SkillModel } from '@/models';
import { left, right } from '@/shared/either';
import { PrismaClientErrorCodes } from '@/types/prisma/prisma-errors';

export async function CreateSkillService(skill: SkillModel): Promise<any> {
  const prisma = await PrismaHelper.getPrisma();

  try {
    const createdSkill = await prisma.skill.create({
      data: {
        id: makeUuidAdapter().build(),
        name: skill.name,
        createdAt: new Date().toISOString(),
      },
    });

    return right(createdSkill);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == PrismaClientErrorCodes.UniqueConstrainFailedError) {
        return left(new UniqueConstrainFailedError(error.message));
      }
    }

    return left(new Error('Error creating skill'));
  }
}
