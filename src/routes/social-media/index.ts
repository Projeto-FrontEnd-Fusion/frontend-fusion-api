import express, { type Router } from 'express';

import { CreateUserSocialMediaController } from '@/controllers/user-social-media';

const socialMediaRoute: Router = express.Router();

socialMediaRoute.post('/social-media', CreateUserSocialMediaController);

export { socialMediaRoute };
