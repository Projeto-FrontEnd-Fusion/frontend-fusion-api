export type SessionModel = {
  id: string;
  ip: string;
  userAgent: string;
  active: boolean;
  createdAt: string;
  updatedAt?: string;
  userId: string;
};
