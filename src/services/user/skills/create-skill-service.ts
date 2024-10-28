import { makeUuidAdapter } from '@/factories/infra/id/uuid-adapter-factory';
import { PrismaHelper } from '@/infra/db/prisma/helpers/prisma-helper';
import { Skill } from '@/routes/user/types';

export async function CreateSkillService(skill: Skill): Promise<any> {
  const prisma = await PrismaHelper.getPrisma();
  const result = await prisma.skill.create({
    data: {
      id: makeUuidAdapter().build(),
      skill: skill.skill,
    },
  });

  return result || null;
}
