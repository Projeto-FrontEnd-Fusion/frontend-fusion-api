import type { Request, Response } from 'express';

import { CreateUserService } from '@/services/session/register-user-service';

export async function RegisterController(req: Request, res: Response) {
  console.log('teste')

  const newUser = await CreateUserService(req.body);
  
  res.send('teste');
}