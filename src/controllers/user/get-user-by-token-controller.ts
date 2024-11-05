import type { Request, Response } from 'express';

import { GetUserByIdService } from '@/services/user/user';
import { getSessionData } from '@/utils';

export async function GetUserByTokenController(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = getSessionData(
    req.headers.authorization?.split('Bearer ').at(-1)
  );

  const userOrNull = await GetUserByIdService(userId);

  if (userOrNull.isLeft()) {
    res.send(userOrNull.value);

    return;
  }

  res.send({ data: userOrNull.value });

  return;
}
