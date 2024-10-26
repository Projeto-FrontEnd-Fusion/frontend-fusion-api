import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from '@/routes/user';
import { authRoutes } from '@/routes/auth';

const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app: Application = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('Olá');
});

app.use('/api', userRoutes);
app.use('/api', authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
