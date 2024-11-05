import express, { type Router } from 'express';

import {
  CreateUserController,
  DeleteUserByIdController,
  GetManyUsersController,
  GetUserByIdController,
  GetUserByTokenController,
} from '@/controllers/user';

const userRoutes: Router = express.Router();

userRoutes.get('/profile', GetUserByTokenController);
userRoutes.route('').get(GetManyUsersController).post(CreateUserController);
userRoutes
  .route('/:userId')
  .get(GetUserByIdController)
  .delete(DeleteUserByIdController);

export { userRoutes };
