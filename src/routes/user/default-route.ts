import express, { Request, Response, Router } from 'express';

import { GetManyUsersService } from '../../services/user/user/get-many-users-service';

export const userDefaultRoute: Router = express.Router();

async function GetManyUsersController(req: Request, res: Response) {
  const users = await GetManyUsersService();

  console.log(`GET Users ${new Date().toLocaleString()}`, users);

  res.send({ data: users });
}

async function GetUserByIdController(req: Request, res: Response) {
  res.send(`userId: ${req.params.userId}`);
}

async function PostController(req: Request, res: Response) {
  res.send(req.body);
}

userDefaultRoute.get('/', GetManyUsersController);
userDefaultRoute.post('/', PostController);
userDefaultRoute.get('/user/:userId', GetUserByIdController);
