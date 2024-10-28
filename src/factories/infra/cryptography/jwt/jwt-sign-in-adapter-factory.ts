import { JwtSignInAdapter } from '@/infra/cryptography/jwt';
import { type Encrypter } from '@/types/cryptography';
import env from '@/configs/env';

export const makeJwtSignInAdapter = (): Encrypter => {
  return new JwtSignInAdapter(env.JWT_TOKEN);
};
