import {
  CreateSkillController,
  GetManySkillsController,
} from '@/controllers/skill';
import express, { type Router } from 'express';

export const skillRoute: Router = express.Router();

skillRoute.get('/skill', GetManySkillsController);
skillRoute.post('/skill', CreateSkillController);
