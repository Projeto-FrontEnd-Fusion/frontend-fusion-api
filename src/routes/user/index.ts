import express, { Router } from 'express';
import { skillRoute } from './skills';
import { socialMediaRoute } from './social-media';
import { projectsRoute } from './projects';
import { userInfoRoute } from './user-info';
import { userDefaultRoute } from './default-route';

const userRoutes: Router = express.Router();

userRoutes.use('/user', userDefaultRoute);
userRoutes.use('/user', userInfoRoute);
userRoutes.use('/user', skillRoute);
userRoutes.use('/user', socialMediaRoute);
userRoutes.use('/user', projectsRoute);

export { userRoutes };
