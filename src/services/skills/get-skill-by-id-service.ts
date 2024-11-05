import { SkillNotFoundedError } from '@/errors/skills';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { type SkillModel } from '@/models/skill-model';
import { type Either, left, right } from '@/shared/either';

export async function GetSkillByIdService(
  id: string
): Promise<Either<Error, SkillModel>> {
  const prisma = await PrismaHelper.getPrisma();
  const skillOrNull = await prisma.skill.findUnique({ where: { id: id } });

  if (skillOrNull) {
    return right(skillOrNull);
  }

  return left(new SkillNotFoundedError());
}
