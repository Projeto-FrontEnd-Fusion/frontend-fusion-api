import HttpStatusCode from '@/utils/statusCode';
import type { Request, Response } from 'express';

export async function CreateUserSocialMediaController(
  req: Request,
  res: Response
): Promise<void> {
  console.log(req.body);

  res.send({
    data: null,
    message: 'Social Media Route',
    statusCode: HttpStatusCode.OK,
  });

  return;
}
