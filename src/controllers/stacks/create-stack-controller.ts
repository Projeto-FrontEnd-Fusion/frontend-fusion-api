import type { Request, Response } from 'express';

import { CreateStackService } from '@/services/stacks';
import HttpStatusCode from '@/utils/statusCode';

export async function CreateStackController(req: Request, res: Response) {
  const stack = await CreateStackService(req.body);

  if (stack.isLeft()) {
    res.send({
      data: null,
      message: 'Error creating Stack',
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: stack.value,
    message: 'Successfully created Stack',
    statusCode: HttpStatusCode.CREATED,
  });

  return;
}
