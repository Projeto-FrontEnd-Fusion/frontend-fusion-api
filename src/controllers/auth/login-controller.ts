import type { Request, Response } from 'express';

import { LoginService } from '@/services/session/login-service';
import HttpStatusCode from '@/utils/statusCode';
import { WrongPasswordError } from '@/errors/account';
import { UserNotFoundedError } from '@/errors/user';

export async function LoginController(req: Request, res: Response) {
  if (!('email' in req.body) && !('password' in req.body)) {
    res.send('Missing information');

    return;
  }

  const userAgent = req.headers['user-agent'];

  const token = await LoginService(req.body, {
    ip: req.ip,
    userAgent: userAgent,
  });

  if (token.isLeft()) {
    res.send({
      data:
        (token.value instanceof WrongPasswordError && { password: false }) ||
        (token.value instanceof UserNotFoundedError && { email: false }),
      message: token.value.message,
      statusCode: HttpStatusCode.BAD_REQUEST,
    });

    return;
  }

  if (token) {
    res.send({
      data: token.value,
      message: 'Login successfully',
      statusCode: HttpStatusCode.OK,
    });

    return;
  }

  res.send({
    data: null,
    message: 'Unknow Error',
    statusCode: HttpStatusCode.BAD_REQUEST,
  });

  return;
}
