import { GetManySkillsService } from '@/services/skills';
import HttpStatusCode from '@/utils/statusCode';
import type { Request, Response } from 'express';

export async function GetManySkillsController(
  req: Request,
  res: Response
): Promise<void> {
  const skills = await GetManySkillsService();

  res.send({
    data: skills,
    message: '',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
