import express, { Request, Response, Router } from 'express';

export const socialMediaRoute: Router = express.Router();

socialMediaRoute.post('/social-media', (req: Request, res: Response) => {
  console.log(req.body);

  res.send('Social Media Route');
});
