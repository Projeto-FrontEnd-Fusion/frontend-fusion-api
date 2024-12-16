import express, { type Router } from 'express';

import {
  CreateSkillController,
  GetManySkillsController,
  GetSkillByIdController,
  UpdateSkillController,
} from '@/controllers/skill';

const skillRoute: Router = express.Router();

skillRoute.route('/').get(GetManySkillsController).post(CreateSkillController);
skillRoute
  .route('/:skillId')
  .get(GetSkillByIdController)
  .put(UpdateSkillController);

export { skillRoute };
