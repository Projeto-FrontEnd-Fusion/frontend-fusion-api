import type { Request, Response } from 'express';

import { DeleteUserByIdService } from '@/services/user/user';
import HttpStatusCode from '@/utils/statusCode';

export async function DeleteUserByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.params;

  await DeleteUserByIdService(userId);

  res.send({
    data: null,
    message: 'User deleted!',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
