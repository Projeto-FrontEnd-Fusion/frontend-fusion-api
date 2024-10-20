export type UserInfo = {
  name: string;
};

export type SocialMedia = {
  github: string;
  githubUsername: string;
  instagram: string;
  linkedin: string;
  behance: string;
};

export type Skill = {
  id: string;
  skill: string;
  createdAt: string | Date;
};

export type Project = {
  id: string;
  title: string;
  url: string;
  user?: User
};

export type User = {
  userInfo: UserInfo;
  socialMedia: SocialMedia;
  projects: Project[];
  skills: Skill[];
};
