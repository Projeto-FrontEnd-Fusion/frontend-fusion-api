import type { Request, Response } from 'express';

import { getSessionData } from '@/utils/utils';
import { UpdateUserSessionByIdService } from '@/services/session/update-user-session-by-ip';

export async function UpdateUserSessionBySessionIdController(
  req: Request,
  res: Response
) {
  const { sessionId, userId } = getSessionData(
    req.headers.authorization?.split('Bearer ').at(-1)
  );

  if (req.ip) {
    await UpdateUserSessionByIdService(sessionId, userId, req.body);
  }
}
