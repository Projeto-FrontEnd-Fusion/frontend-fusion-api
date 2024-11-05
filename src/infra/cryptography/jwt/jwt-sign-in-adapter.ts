import jwt from 'jsonwebtoken';

import { Encrypter } from '@/types/cryptography';

export class JwtSignInAdapter implements Encrypter {
  constructor(private readonly secretKey: string) {}

  execute(userId: string, sessionId: string): string {
    const token = jwt.sign(
      { userId: userId, sessionId: sessionId },
      this.secretKey,
      {
        expiresIn: '1h',
      }
    );

    return token;
  }
}
