import express, { Router } from 'express';

import {
  GetProjectByIdController,
  GetManyProjectsController,
  GetManyProjectsByUserIdController,
  CreateProjectController,
  DeleteProjectByIdController,
} from '@/controllers/project';

const projectsRoute: Router = express.Router();

projectsRoute
  .route('')
  .get(GetManyProjectsController)
  .post(CreateProjectController);
projectsRoute
  .route('/:projectId')
  .get(GetProjectByIdController)
  .delete(DeleteProjectByIdController);
projectsRoute.get('/user/:userId', GetManyProjectsByUserIdController);

export { projectsRoute };
