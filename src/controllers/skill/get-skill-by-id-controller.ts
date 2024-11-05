import { GetSkillByIdService } from '@/services/skills';
import HttpStatusCode from '@/utils/statusCode';
import { Request, Response } from 'express';

export async function GetSkillByIdController(req: Request, res: Response) {
  const { skillId } = req.params;

  const skillOrNull = await GetSkillByIdService(skillId);

  if (skillOrNull.isLeft()) {
    res.send({
      data: null,
      message: skillOrNull.value,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: skillOrNull.value,
    message: null,
    statusCode: HttpStatusCode.OK,
  });

  return;
}
