import { Request, Response } from 'express';

export async function GetProjectByIdController(req: Request, res: Response) {
  console.log(req.params);

  const { id } = req.params;

  res.send(`Your param userId: ${req.params.userId}`);
}
