export type SessionModel = {
  id: string;
  ip: string;
  userAgent: string;
  active: boolean;
  createdAt: string | boolean;
  updatedAt: string | boolean;
  userId: string;
};
