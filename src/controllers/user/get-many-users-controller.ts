import type { Request, Response } from 'express';

import { GetManyUsersService } from '@/services/user/user/get-many-users-service';

export async function GetManyUsersController(req: Request, res: Response) {
  const users = await GetManyUsersService();

  console.log(`GET Users ${new Date().toLocaleString()}`, users);

  res.send({ data: users });
}
