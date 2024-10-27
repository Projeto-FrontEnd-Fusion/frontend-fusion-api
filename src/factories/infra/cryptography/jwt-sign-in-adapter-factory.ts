import env from '@/configs/env';
import { JwtSignInAdapter } from '@/infra/cryptography/jwt/jwt-sign-in-adapter';

export const makeJwtSignInAdapter = () => {
  return new JwtSignInAdapter(env.JWT_TOKEN);
};
