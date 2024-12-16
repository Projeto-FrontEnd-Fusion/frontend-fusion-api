import type { Request, Response } from 'express';

import { GetManyProjectsByUserIdService } from '@/services/user/projects';
import HttpStatusCode from '@/utils/statusCode';

export async function GetManyProjectsByUserIdController(
  req: Request,
  res: Response
) {
  const { userId } = req.params;

  const projects = await GetManyProjectsByUserIdService(userId);

  if (projects) {
    res.send({
      data: projects,
      message: 'Successfully finded many projects by user id',
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Failed to find many projects by user id',
    statusCode: HttpStatusCode.BAD_REQUEST,
  });

  return;
}
