import express, { type Application } from 'express';
import cors from 'cors';

import {
  userRoutes,
  authRoutes,
  skillRoute,
  projectsRoute,
  socialMediaRoute,
  stackRoutes,
} from '@/routes';
import { corsOptions, limiter } from '@/configs';
import { RequestLog } from './shared/helpers/req-log';

const app: Application = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(limiter);

// Log Middleware
app.use((req, res, next) => {
  RequestLog(req);
  next();
});

app.use('/api/v1/skill', skillRoute);
app.use('/api/v1/project', projectsRoute);
app.use('/api/v1/social-media', socialMediaRoute);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/skill', skillRoute);
app.use('/api/v1/stack', stackRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
