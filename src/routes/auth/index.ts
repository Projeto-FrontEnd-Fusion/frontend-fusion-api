import express, { Router } from 'express';
import { authDefaultRoute } from './auth-route';

const authRoutes: Router = express.Router();

authRoutes.use('/auth', authDefaultRoute);

export { authRoutes };
