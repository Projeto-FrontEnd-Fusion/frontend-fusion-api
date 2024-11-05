import type { Request, Response } from 'express';

import { GetManyToolsService } from '@/services/tools';
import HttpStatusCode from '@/utils/statusCode';

export async function GetManyToolsController(req: Request, res: Response) {
  const tools = await GetManyToolsService();

  if (tools.isLeft()) {
    res.send({
      data: null,
      message: tools.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: tools,
    message: 'Successfully finded many tools',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
