import { Request, Response } from 'express';

import { GetManyProjectsService } from '@/services/user/projects';

export async function GetManyProjectsController(req: Request, res: Response) {
  const data = await GetManyProjectsService();

  res.send({ data: data });
}
