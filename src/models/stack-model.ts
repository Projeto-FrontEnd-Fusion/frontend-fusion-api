import { SkillModel } from './skill-model';

export type StackModel = {
  id: string;
  name: string;
  skills: SkillModel[];
  isVisible: boolean;
  createdAt: string;
};
