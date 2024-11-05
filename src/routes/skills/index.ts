import express, { type Router } from 'express';

import {
  CreateSkillController,
  GetManySkillsController,
  GetSkillByIdController,
} from '@/controllers/skill';

const skillRoute: Router = express.Router();

skillRoute.route('/').get(GetManySkillsController).post(CreateSkillController);
skillRoute.route('/:skillId').get(GetSkillByIdController);

export { skillRoute };
