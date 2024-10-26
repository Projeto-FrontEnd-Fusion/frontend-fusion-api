import { Request, Response } from 'express';

export async function GetProjectsByUserIdController(
  req: Request,
  res: Response
) {
  console.log(req.params);
}
