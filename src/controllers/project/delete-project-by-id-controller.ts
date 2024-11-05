import type { Request, Response } from 'express';

import { DeleteProjectByIdService } from '@/services/user/projects';

export async function DeleteProjectByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.params;

  const deleted = await DeleteProjectByIdService(id);

  if (deleted) {
    res.send('deleted').status(200);
    return;
  }

  res.send('Error deleting project').status(404);

  return;
}
