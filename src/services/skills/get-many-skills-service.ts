import { PrismaHelper } from '@/infra/db/prisma/helpers';
import { SkillModel } from '@/models/skill-model';

export async function GetManySkillsService(): Promise<SkillModel[] | []> {
  const prisma = await PrismaHelper.getPrisma();
  const skills = await prisma.skill.findMany();

  return skills || [];
}
