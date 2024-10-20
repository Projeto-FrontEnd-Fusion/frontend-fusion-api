import express, { Request, Response, Router } from 'express';

import { GetManyUsersService } from '../../services/user/user/get-many-users-service';
import { CreateUserService } from '@/services/user/user/create-user-service';

export const userDefaultRoute: Router = express.Router();

userDefaultRoute.get('/', async (req: Request, res: Response) => {
  const users = await GetManyUsersService();

  console.log(`GET Users ${new Date().toLocaleString()}`, users);

  res.send({ data: users });
});

userDefaultRoute.post('/', async (req: Request, res: Response) => {
  const newUser = await CreateUserService(req.body);

  res.send('testee');
});

userDefaultRoute.get('/user/:userId', async (req: Request, res: Response) => {
  res.send(`userId: ${req.params.userId}`);
});

userDefaultRoute.post('/', (req: Request, res: Response) => {
  res.send(req.body);
});
