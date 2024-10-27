import { UuidAdapter } from '@/infra/id/uuid';

export const makeUuidAdapter = () => {
  return new UuidAdapter();
};
