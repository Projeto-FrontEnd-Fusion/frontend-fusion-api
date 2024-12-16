import type { Request, Response } from 'express';

import { GetManySkillsService } from '@/services/skills';
import HttpStatusCode from '@/utils/statusCode';

export async function GetManySkillsController(
  req: Request,
  res: Response
): Promise<void> {
  const skills = await GetManySkillsService();

  res.send({
    data: skills,
    message: 'Successfully finded many skills',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
