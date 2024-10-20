import jwt from 'jsonwebtoken';

export class JwtVerifyAdapter {
  constructor(private readonly secretKey: string) {}

  async execute(token: string): Promise<null | string> {
    try {
      const payload: any = jwt.verify(token, this.secretKey);
      if (!payload.email) return null;
      return payload.email;
    } catch (err: any) {
      const errors = [
        'JsonWebTokenError',
        'NotBeforeError',
        'TokenExpiredError',
        'SyntaxError',
      ];
      for (const name of errors) {
        if (err.name === name) {
          return null;
        }
      }
      throw new Error(err.message);
    }
  }
}
