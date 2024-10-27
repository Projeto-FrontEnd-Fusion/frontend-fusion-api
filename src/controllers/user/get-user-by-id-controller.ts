import type { Request, Response } from 'express';

export async function GetUserByIdController(req: Request, res: Response) {
  res.send(`userId: ${req.params.userId}`);
}
