import { Request, Response } from 'express';

import { CreateProjectService } from '@/services/user/projects/create-project-service';

export async function CreateProjectController(req: Request, res: Response) {
  const body = req.body;

  if (body.url && body.title) {
    const created = await CreateProjectService(body);

    if (created) res.send('Sucesso').status(201);
    return;
  }

  res.send('Erro!').status(404);
  return;
}
