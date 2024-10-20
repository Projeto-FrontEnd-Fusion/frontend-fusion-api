import { UserModel } from "./user-model";

export type ProjectModel = {
  id: string;
  title: string;
  url: string;
  createdAt: string | Date;
};
