import { GetUserSessions } from '@/services/session/get-user-sessions';
import { LoginService } from '@/services/session/login-service';
import { UpdateUserSessionByIdService } from '@/services/session/update-user-session-by-ip';
import express, { Request, Response, Router } from 'express';

export const authDefaultRoute: Router = express.Router();

authDefaultRoute.post('/login', async (req: Request, res: Response) => {
  if (!('email' in req.body) && !('password' in req.body)) {
    res.send('Missing information');

    return;
  }

  const loginService = await LoginService(req.body, {
    ip: req.ip,
    userAgent: req.headers['user-agent'],
  });

  res.send('vazio');
});

authDefaultRoute.put('/session', async (req: Request, res: Response) => {
  if (req.ip) {
    await UpdateUserSessionByIdService(req.ip, req.body);
  }
});

authDefaultRoute.get(
  '/session/:userId',
  async (req: Request, res: Response) => {
    const result = await GetUserSessions(req.params.userId);
    console.log(result);

    res.send(result);
    return;
  }
);
