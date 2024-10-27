export class UserNotFoundedError extends Error {
  constructor() {
    super('User not founded')
    this.name = 'UserNotFoundedError'
  }
}