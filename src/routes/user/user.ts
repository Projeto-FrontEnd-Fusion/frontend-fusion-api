import express, { type Router } from 'express';

import {
  CreateUserController,
  DeleteUserByIdController,
  GetManyUsersController,
  GetUserByIdController,
} from '@/controllers/user';

export const userDefaultRoute: Router = express.Router();

userDefaultRoute.get('/', GetManyUsersController);
userDefaultRoute.post('/', CreateUserController);
userDefaultRoute.get('/:userId', GetUserByIdController);
userDefaultRoute.delete('/:userId', DeleteUserByIdController);
