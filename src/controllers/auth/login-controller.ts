import type { Request, Response } from 'express';

import { LoginService } from '@/services/session/login-service';

export async function LoginController(req: Request, res: Response) {
  if (!('email' in req.body) && !('password' in req.body)) {
    res.send('Missing information');

    return;
  }

  const loginService = await LoginService(req.body, {
    ip: req.ip,
    userAgent: req.headers['user-agent'],
  });

  res.send('vazio');
}
