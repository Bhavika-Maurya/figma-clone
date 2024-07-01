import { Project } from "../project/Project";
import { User } from "../user/User";

export type Collaborator = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  role: string | null;
  updatedAt: Date;
  user?: User | null;
};
