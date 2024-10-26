import express, { Router } from 'express';
import {
  GetProjectByIdController,
  GetManyProjectsController,
  GetProjectsByUserIdController,
  CreateProjectController,
  DeleteProjectByIdController,
} from '@/controllers/project';

export const projectsRoute: Router = express.Router();

projectsRoute.get('/project', GetManyProjectsController);
projectsRoute.get('/project/:userId', GetProjectByIdController);
projectsRoute.get('/project/user/:userId', GetProjectsByUserIdController);
projectsRoute.post('/project', CreateProjectController);
projectsRoute.delete('/project/:id', DeleteProjectByIdController);
