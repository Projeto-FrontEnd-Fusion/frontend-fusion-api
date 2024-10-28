import { GetManyProjectsByUserIdService } from '@/services/user/projects';
import { Request, Response } from 'express';

export async function GetManyProjectsByUserIdController( req: Request, res: Response) {
  const { userId } = req.params;

  const projects = await GetManyProjectsByUserIdService(userId);
}
