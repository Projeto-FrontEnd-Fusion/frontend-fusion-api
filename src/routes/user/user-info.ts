import express, { Request, Response, Router } from 'express';

export const userInfoRoute: Router = express.Router();

userInfoRoute.post('/personal-info', (req: Request, res: Response) => {
  const data = req.body.data;

  console.log(data);

  res.send('posting personal information')
});
