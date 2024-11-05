import type { Request, Response } from 'express';

export async function GetProjectByIdController(req: Request, res: Response) {
  const { id } = req.params;

  res.send(`Your param userId: ${req.params.userId}`);
}
