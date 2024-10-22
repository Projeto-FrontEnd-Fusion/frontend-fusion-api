export class UsernameAlreadyExistsError extends Error {
  constructor() {
    super('Username Already Exists');
    this.name = 'UsernameAlreadyExistsError';
  }
}
