import type { Request, Response } from 'express';

import { GetUserByIdService } from '@/services/user/user';
import HttpStatusCode from '@/utils/statusCode';

export async function GetUserByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.params;

  const userOrNull = await GetUserByIdService(userId);

  if (userOrNull.isLeft()) {
    res.send({
      data: userOrNull.value,
      message: '',
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: userOrNull.value,
    message: 'Error finding Users',
    statusCode: HttpStatusCode.BAD_REQUEST,
  });

  return;
}
