import { Request, Response } from 'express';

import { GetManyProjectsByUserIdService } from '@/services/user/projects';

export async function GetManyProjectsByUserIdController(
  req: Request,
  res: Response
) {
  const { userId } = req.params;

  const projects = await GetManyProjectsByUserIdService(userId);
}
