export class EmailAlreadyRegisteredError extends Error {
  constructor() {
    super('Email already registerd.');
    this.name = 'EmailAlreadyRegisteredError';
  }
}
