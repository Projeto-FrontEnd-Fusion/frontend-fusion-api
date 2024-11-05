import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { makePrismaHelperAdapter } from '@/factories/infra/prisma/prisma-helper-adapter-factory';
import { ErrorUpdatingData } from '@/errors/prisma';
import { SkillModel } from '@/models';
import { left, right } from '@/shared/either';

export async function UpdateSkillService(
  skillId: string,
  data: Partial<SkillModel>
) {
  const prisma = await makePrismaHelperAdapter();

  try {
    const updatedSkill = await prisma.skill.update({
      where: {
        id: skillId,
      },
      data: {
        name: data.name,
      },
    });

    if (updatedSkill) {
      return right(updatedSkill);
    }

    return left(new ErrorUpdatingData());
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return left(new Error(error.message));
    }

    return left(new ErrorUpdatingData());
  }
}
