import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { userRoutes, authRoutes } from '@/routes';
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

app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
