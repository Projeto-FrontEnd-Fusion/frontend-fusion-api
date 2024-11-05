import express, { type Router } from 'express';

import {
  CreateStackController,
  GetManyStacksController,
} from '@/controllers/stacks';
import { GetStackByIdController } from '@/controllers/stacks/get-stack-by-id-controller';
import { DeleteStackController } from '@/controllers/stacks/delete-stack-controller';

const stackRoutes: Router = express.Router();

stackRoutes.route('').get(GetManyStacksController).post(CreateStackController);
stackRoutes
  .route('/:stackId')
  .get(GetStackByIdController)
  .delete(DeleteStackController);

export { stackRoutes };
