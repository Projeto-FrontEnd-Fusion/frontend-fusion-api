import express, { type Router } from 'express';

import {
  LoginController,
  RegisterController,
  GetManyUserSessionsByUserIdController,
  UpdateUserSessionBySessionIdController,
} from '@/controllers/auth';

export const authRoutes: Router = express.Router();

authRoutes.post('/login', LoginController);
authRoutes.post('/register', RegisterController);
authRoutes.get('/session/:userId', GetManyUserSessionsByUserIdController);
authRoutes.put('/session', UpdateUserSessionBySessionIdController);
