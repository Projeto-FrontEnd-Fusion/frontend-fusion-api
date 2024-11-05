import type { Request, Response } from 'express';

import { DeleteToolByIdService } from '@/services/tools';
import HttpStatusCode from '@/utils/statusCode';

export async function DeleteToolByIdController(req: Request, res: Response) {
  const { toolId } = req.params;

  const deletedProject = await DeleteToolByIdService(toolId);

  if (deletedProject.isLeft()) {
    res.send({
      data: null,
      message: deletedProject.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Tool deleted!',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
