import type { Request, Response } from 'express';

import { UpdateSkillService } from '@/services/skills';
import HttpStatusCode from '@/utils/statusCode';

export async function UpdateSkillController(res: Response, req: Request) {
  const { skillId } = req.params;

  const updatedSkill = await UpdateSkillService(skillId, req.body);

  if (updatedSkill.isLeft()) {
    res.send({
      data: null,
      message: updatedSkill.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: updatedSkill,
    message: 'Successfully finded skill',
    statusCode: HttpStatusCode.OK,
  });
  
  return;
}
