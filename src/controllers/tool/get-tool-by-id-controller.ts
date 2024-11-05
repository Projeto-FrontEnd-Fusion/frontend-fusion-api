import type { Request, Response } from 'express';

import { GetToolByIdService } from '@/services/tools';
import HttpStatusCode from '@/utils/statusCode';

export async function GetToolByIdController(req: Request, res: Response) {
  const { toolId } = req.params;

  const tool = await GetToolByIdService(toolId);

  if (tool.isLeft()) {
    res.send({
      data: null,
      message: tool.value.message,
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: tool,
    message: 'Successfully finded tool',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
