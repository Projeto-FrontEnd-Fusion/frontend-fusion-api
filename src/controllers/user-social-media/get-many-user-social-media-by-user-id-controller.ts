import type { Request, Response } from 'express';

import { GetManyUserSocialMediaByUserIdService } from '@/services/user/social-media';

export async function GetManyUserSocialMediaByUserIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.params;

  const userSocialMedia = await GetManyUserSocialMediaByUserIdService(userId);

  

  return;
}
