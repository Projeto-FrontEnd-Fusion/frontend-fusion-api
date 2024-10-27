import type { Request, Response } from 'express';

export async function CreateUserSocialMediaController(
  req: Request,
  res: Response
) {
  console.log(req.body);

  res.send('Social Media Route');
}
