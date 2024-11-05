import type { Request, Response } from 'express';

import { GetManyUsersService } from '@/services/user/user';
import HttpStatusCode from '@/utils/statusCode';

export async function GetManyUsersController(
  req: Request,
  res: Response
): Promise<void> {
  const users = await GetManyUsersService();

  res.send({ data: users, message: '', statusCode: HttpStatusCode.OK });

  return;
}
