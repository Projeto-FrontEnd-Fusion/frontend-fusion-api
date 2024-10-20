import * as uuid from 'uuid';

export class UuidAdapter {
  build(): string {
    return uuid.v4();
  }

  validate(id: string): boolean {
    return uuid.validate(id);
  }
}
