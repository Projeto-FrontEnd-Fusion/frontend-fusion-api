import type { Request, Response } from 'express';

export async function CreateSkillController(req: Request, res: Response) {
  const data = req.body;

  console.log(data);

  res.send(data);
}