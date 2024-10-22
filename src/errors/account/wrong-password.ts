export class WrongPasswordError extends Error {
  constructor() {
    super('Wrong Password');
    this.name = 'WrongPasswordError';
  }
}
