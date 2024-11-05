import type { Request, Response } from 'express';

export async function CreateUserController(
  req: Request,
  res: Response
): Promise<void> {
  res.send(req.body);
}
