import express, { type Router } from 'express';

import {
  LoginController,
  RegisterController,
  LogoutController,
  GetManyUserSessionsByUserIdController,
  UpdateUserSessionBySessionIdController,
} from '@/controllers/auth';

const authRoutes: Router = express.Router();

authRoutes.post('/login', LoginController);
authRoutes.post('/register', RegisterController);
authRoutes.delete('/logout', LogoutController);
authRoutes.get('/session/:userId', GetManyUserSessionsByUserIdController);
authRoutes.put('/session', UpdateUserSessionBySessionIdController);

export { authRoutes };
