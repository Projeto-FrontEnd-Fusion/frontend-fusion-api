import { GetManyProjectsService } from '@/services/user/projects/get-many-projects';
import { Request, Response } from 'express';

export async function GetManyProjectsController(req: Request, res: Response) {
  const data = await GetManyProjectsService();

  res.send({ data: data });
}
