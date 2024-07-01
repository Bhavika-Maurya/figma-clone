import { Collaborator } from "../collaborator/Collaborator";
import { Design } from "../design/Design";

export type Project = {
  collaborators?: Array<Collaborator>;
  createdAt: Date;
  description: string | null;
  designs?: Array<Design>;
  id: string;
  owner: string | null;
  title: string | null;
  updatedAt: Date;
};
