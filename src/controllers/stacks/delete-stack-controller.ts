import type { Request, Response } from 'express';

import { DeleteStackService } from '@/services/stacks';
import HttpStatusCode from '@/utils/statusCode';

export async function DeleteStackController(req: Request, res: Response) {
  const { stackId } = req.params;

  const deletedStack = await DeleteStackService(stackId);

  if (!deletedStack) {
    res.send({
      data: null,
      message: 'Internal error',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  if (deletedStack.isRight()) {
    res.send({
      data: null,
      message: 'Stack was deleted!',
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Error deleting Stack!',
    statusCode: HttpStatusCode.BAD_REQUEST,
  });

  return;
}
