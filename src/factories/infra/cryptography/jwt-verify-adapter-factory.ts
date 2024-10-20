import env from '@/configs/env';
import { JwtVerifyAdapter } from '@/infra/cryptography/jwt/jwt-verify-adapter';

export const makeJwtVerifyAdapter = () => {
  return new JwtVerifyAdapter(env.JWT_TOKEN);
};
