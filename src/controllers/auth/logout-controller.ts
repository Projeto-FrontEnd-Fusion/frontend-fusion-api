import type { Request, Response } from 'express';

import { LogoutService } from '@/services/session';
import { getSessionData } from '@/utils';
import HttpStatusCode from '@/utils/statusCode';

export async function LogoutController(req: Request, res: Response) {
  const { userId, sessionId } = getSessionData(
    req.headers.authorization?.split('Bearer ').at(-1)
  );

  console.log(userId, sessionId)

  const deleteUser = await LogoutService(userId, sessionId);

  res.send({
    data: null,
    message: 'Logout bem sucedido!',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
