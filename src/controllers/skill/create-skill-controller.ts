import type { Request, Response } from 'express';

import { CreateSkillService } from '@/services/skills';
import HttpStatusCode from '@/utils/statusCode';

export async function CreateSkillController(req: Request, res: Response) {
  const skillOrNull = await CreateSkillService(req.body);

  if (skillOrNull.isLeft()) {
    res.send({
      data: null,
      message: 'Error creating Skill',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: skillOrNull.value,
    message: 'Successfully created Skill',
    statusCode: HttpStatusCode.CREATED,
  });

  return;
}
