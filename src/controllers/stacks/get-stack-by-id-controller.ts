import type { Request, Response } from 'express';

import { GetStackByIdService } from '@/services/stacks';
import HttpStatusCode from '@/utils/statusCode';

export async function GetStackByIdController(req: Request, res: Response) {
  const { stackId } = req.params;

  const stack = await GetStackByIdService(stackId);

  if (!stack) return;

  if (stack.isLeft()) {
    res.send({
      data: null,
      message: stack.value,
      statusCode: HttpStatusCode.BAD_GATEWAY,
    });

    return;
  }

  res.send({
    data: stack.value,
    message: '',
    statusCode: HttpStatusCode.OK
  })

  return;
}
