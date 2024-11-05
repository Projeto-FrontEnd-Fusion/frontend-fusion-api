export class ToolNotFoundedError extends Error {
  constructor() {
    super('Tool Not Founded');
    this.name = 'ToolNotFoundedError';
  }
}
