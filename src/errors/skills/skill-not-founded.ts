export class SkillNotFoundedError extends Error {
  constructor() {
    super('Skill Not Founded Error');
    this.name = 'SkillNotFoundedError';
  }
}
