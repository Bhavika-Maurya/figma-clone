import { CollaboratorUpdateManyWithoutProjectsInput } from "./CollaboratorUpdateManyWithoutProjectsInput";
import { DesignUpdateManyWithoutProjectsInput } from "./DesignUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  collaborators?: CollaboratorUpdateManyWithoutProjectsInput;
  description?: string | null;
  designs?: DesignUpdateManyWithoutProjectsInput;
  owner?: string | null;
  title?: string | null;
};
