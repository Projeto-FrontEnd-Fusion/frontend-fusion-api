import express, { type Router } from 'express';

import { skillRoute } from './skills';
import { socialMediaRoute } from './social-media';
import { projectsRoute } from './projects';
import { userDefaultRoute } from './user';
import { HelloWorldController } from '@/controllers/user';

const userRoutes: Router = express.Router();

userRoutes.get('/', HelloWorldController);
userRoutes.use('/user', userDefaultRoute);
userRoutes.use('/user', skillRoute);
userRoutes.use('/user', socialMediaRoute);
userRoutes.use('/user', projectsRoute);

export { userRoutes };
