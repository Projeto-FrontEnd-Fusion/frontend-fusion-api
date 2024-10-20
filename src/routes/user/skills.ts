import express, { Request, Response, Router } from 'express';

export const skillRoute: Router = express.Router();

skillRoute.get('/skills', (req: Request, res: Response) => {
  console.log(req.body)

  res.send('teste')
})

skillRoute.post('/skills', (req: Request, res: Response) => {
  const data = req.body;

  console.log(data);

  res.send(data);
});
