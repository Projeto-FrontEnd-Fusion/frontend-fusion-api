import { getSessionData } from '@/utils/utils';
import { Request } from 'express';

export type RequestLogParams = {
  method: string;
  originalUrl: string;
  ip: string;
  userAgent: string;
  userId: string;
};

export function RequestLog(req: Request) {
  const { method, originalUrl, ip } = req;
  const userAgent = req.headers['user-agent'];
  const { userId } = getSessionData(
    req.headers.authorization?.split('Bearer ').at(-1)
  );
  console.log(
    `[${method}] - ${originalUrl} - ${ip} - ${userAgent} - ${
      userId || 'Undefined'
    }`
  );
}
