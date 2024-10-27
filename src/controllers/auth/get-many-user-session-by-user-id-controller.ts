import type { Request, Response } from 'express';

import { GetUserSessions } from '@/services/session/get-user-sessions';

export async function GetManyUserSessionsByUserIdController(
  req: Request,
  res: Response
) {
  const result = await GetUserSessions(req.params.userId);
  console.log(result);

  res.send(result);
  return;
}
