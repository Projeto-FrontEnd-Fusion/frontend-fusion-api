import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { userRoutes, authRoutes } from '@/routes';
import { corsOptions } from '@/configs';

const app: Application = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('Olá');
});

app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
