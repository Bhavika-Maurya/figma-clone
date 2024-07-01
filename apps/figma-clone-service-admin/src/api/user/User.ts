import { Collaborator } from "../collaborator/Collaborator";
import { JsonValue } from "type-fest";

export type User = {
  collaborators?: Array<Collaborator>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
