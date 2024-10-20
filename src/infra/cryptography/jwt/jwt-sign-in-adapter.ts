import jwt from 'jsonwebtoken';

export class JwtSignInAdapter {
  constructor(private readonly secretKey: string) {}

  execute(value: string): { token: string } {
    const token = jwt.sign({ email: value }, this.secretKey, {
      expiresIn: '1h',
    });

    return { token };
  }
}
