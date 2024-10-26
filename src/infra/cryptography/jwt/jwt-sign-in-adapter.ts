import jwt from 'jsonwebtoken';

export class JwtSignInAdapter {
  constructor(private readonly secretKey: string) {}

  execute(userId: string, sessionId: string): { token: string } {
    const token = jwt.sign(
      { userId: userId, sessionId: sessionId },
      this.secretKey,
      {
        expiresIn: '1h',
      }
    );

    return { token };
  }
}
