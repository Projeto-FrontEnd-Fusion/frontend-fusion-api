import type { Request, Response } from 'express';

export async function HelloWorldController(
  req: Request,
  res: Response
): Promise<void> {
  res.send('Olá');

  return;
}
