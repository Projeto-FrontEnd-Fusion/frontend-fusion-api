import { GetUserSessions } from '@/services/session/get-user-sessions';
import { LoginService } from '@/services/session/login-service';
import { UpdateUserSessionByIdService } from '@/services/session/update-user-session-by-ip';
import { CreateUserService } from '@/services/user/user/create-user-service';
import { getSessionData } from '@/utils/utils';
import express, { Request, Response, Router } from 'express';

export const authRoutes: Router = express.Router();

authRoutes.post('/login', async (req: Request, res: Response) => {
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

authRoutes.post('/register', async (req: Request, res: Response) => {
  const newUser = await CreateUserService(req.body);

  res.send('teste');
});

authRoutes.put('/session', async (req: Request, res: Response) => {
  const { sessionId, userId } = getSessionData(
    req.headers.authorization?.split('Bearer ').at(-1)
  );

  if (req.ip) {
    await UpdateUserSessionByIdService(sessionId, userId, req.body);
  }
});

authRoutes.get(
  '/session/:userId',
  async (req: Request, res: Response) => {
    const result = await GetUserSessions(req.params.userId);
    console.log(result);

    res.send(result);
    return;
  }
);
