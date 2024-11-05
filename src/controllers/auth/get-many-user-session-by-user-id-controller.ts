import type { Request, Response } from 'express';

import { GetUserSessionsByUserIdService } from '@/services/session';

export async function GetManyUserSessionsByUserIdController(
  req: Request,
  res: Response
) {
  const { userId } = req.params;

  const result = await GetUserSessionsByUserIdService(userId);
  console.log(result);

  res.send(result);
  return;
}
