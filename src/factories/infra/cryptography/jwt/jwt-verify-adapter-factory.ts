import { JwtVerifyAdapter } from '@/infra/cryptography/jwt';
import { Decrypter } from '@/types/cryptography';
import env from '@/configs/env';

export const makeJwtVerifyAdapter = (): Decrypter => {
  return new JwtVerifyAdapter(env.JWT_TOKEN);
};
