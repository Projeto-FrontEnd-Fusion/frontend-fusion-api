import type { Request, Response } from 'express';

import { RegisterUserService } from '@/services/session';
import HttpStatusCode from '@/utils/statusCode';

export async function RegisterController(req: Request, res: Response) {
  const newUser = await RegisterUserService(req.body);

  if (newUser.isLeft()) {
    res.send({
      data: null,
      message: newUser.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  res.send({
    data: newUser.value,
    message: 'Successfully created a new Account',
    statusCode: HttpStatusCode.CREATED,
  });

  return;
}
