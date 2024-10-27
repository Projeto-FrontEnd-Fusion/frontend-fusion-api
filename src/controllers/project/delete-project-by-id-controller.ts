import { Request, Response } from 'express';

import { DeleteProjectService } from '@/services/user/projects/delete-project-by-id-service';

export async function DeleteProjectByIdController(req: Request, res: Response) {
  const { id } = req.params;

  const deleted = await DeleteProjectService(id);

  if (deleted) {
    res.send('deleted').status(200);
    return;
  }

  res.send('Error deleting project').status(404);
  return;
}
