import express, { Request, Response, Router } from 'express';
import { CreateProjectService } from '../../services/user/projects/create-project';
import { GetManyProjectsService } from '../../services/user/projects/get-many-projects';
import { DeleteProjectService } from '../../services/user/projects/delete-project';

export const projectsRoute: Router = express.Router();

projectsRoute.get('/project', async (req: Request, res: Response) => {
  const data = await GetManyProjectsService();

  res.send({ data: data });
});

projectsRoute.get('/project/:userId', async (req: Request, res: Response) => {
  console.log(req.params);

  const params = req.params;

  res.send(`Your param userId: ${req.params.userId}`);
});

projectsRoute.get('/project/user/:userId', async (req: Request, res: Response) => {
  console.log(req.params);
})

projectsRoute.post('/project', async (req: Request, res: Response) => {
  const body = req.body;

  if (body.url && body.title) {
    const created = await CreateProjectService(body);

    if (created) res.send('Sucesso').status(201);
    return;
  }

  res.send('Erro!').status(404);
  return;
});

projectsRoute.delete('/project/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await DeleteProjectService(id);

  if (deleted) {
    res.send('deleted').status(200);
    return;
  }

  res.send('Error deleting project').status(404);
  return;
});
