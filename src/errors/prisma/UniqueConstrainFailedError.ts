export class UniqueConstrainFailedError extends Error {
  constructor(name: string) {
    super(`Unique constrain failed error on field ${name}`);
    this.name = 'UniqueConstrainFailedError';
  }
}
