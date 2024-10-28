import type { Request, Response } from 'express';

import { GetUserByIdService } from '@/services/user/user';

export async function GetUserByIdController(req: Request, res: Response) {
  const { userId } = req.params;

  const userOrNull = await GetUserByIdService(userId);

  if (userOrNull.isLeft()) {
    res.send(userOrNull.value);
  }

  res.send(userOrNull.value);
}
