import { Request, Response } from 'express';

export async function CreateUserController(req: Request, res: Response) {
  res.send(req.body);
}
