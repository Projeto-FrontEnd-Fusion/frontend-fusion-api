import { GetProjectByIdService } from '@/services/user/projects';
import HttpStatusCode from '@/utils/statusCode';
import type { Request, Response } from 'express';

export async function GetProjectByIdController(req: Request, res: Response) {
  const { projectId } = req.params;

  const project = await GetProjectByIdService(projectId);

  if (project.isLeft()) {
    res.send({
      data: null,
      message: project.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: project,
    message: 'Successfully finded project by id',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
