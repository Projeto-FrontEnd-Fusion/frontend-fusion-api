import type { Request, Response } from 'express';

import { DeleteProjectByIdService } from '@/services/user/projects';
import HttpStatusCode from '@/utils/statusCode';

export async function DeleteProjectByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { projectId } = req.params;

  const deleted = await DeleteProjectByIdService(projectId);

  if (deleted) {
    res.send({
      data: null,
      message: 'Successfully deleted project',
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Error deleting project',
    statusCode: HttpStatusCode.BAD_REQUEST,
  });

  return;
}
