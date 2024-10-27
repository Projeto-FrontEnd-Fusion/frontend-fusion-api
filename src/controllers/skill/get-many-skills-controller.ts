import type { Request, Response } from 'express';

export async function GetManySkillsController(req: Request, res: Response) {
  console.log(req.body);

  res.send('teste');
}
