import type { Request, Response } from 'express';

import { GetManyStacksService } from '@/services/stacks';
import HttpStatusCode from '@/utils/statusCode';

export async function GetManyStacksController(req: Request, res: Response) {
  const stacks = await GetManyStacksService();

  res.send({ data: stacks, message: null, statusCode: HttpStatusCode.OK });

  return;
}
