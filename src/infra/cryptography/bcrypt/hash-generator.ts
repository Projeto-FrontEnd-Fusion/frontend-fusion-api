import * as bcrypt from 'bcrypt';

export interface HashGenerator {
  hash: (password: string) => string;
  matches: (password: string, hashedPassword: string) => boolean;
}

export class HashGeneratorAdapter implements HashGenerator {
  constructor() {}

  hash(password: string): string {
    return bcrypt.hashSync(password, 2);
  }

  matches(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }
}
