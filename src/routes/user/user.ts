import express, { type Router } from 'express';

import {
  GetManyUsersController,
  GetUserByIdController,
} from '@/controllers/user';

export const userDefaultRoute: Router = express.Router();

userDefaultRoute.get('/', GetManyUsersController);
userDefaultRoute.get('/user/:userId', GetUserByIdController);
