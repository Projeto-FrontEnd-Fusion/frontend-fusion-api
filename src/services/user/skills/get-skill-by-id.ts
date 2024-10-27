import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { SkillModel } from '@/models';

export async function GetSkillByIdService(
  id: string
): Promise<SkillModel | null> {
  const prisma = await PrismaHelper.getPrisma();
  const skillOrNull = await prisma.skill.findUnique({ where: { id: id } });

  return skillOrNull;
}
