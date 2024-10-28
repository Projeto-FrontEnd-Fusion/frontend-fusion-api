import type { Request, Response } from 'express';

import { DeleteUserByIdService } from '@/services/user/user';

export async function DeleteUserByIdController(req: Request, res: Response) {
  const { userId } = req.params;

  await DeleteUserByIdService(userId);

  res.send('User deleted!');
}
