import { CollaboratorCreateNestedManyWithoutProjectsInput } from "./CollaboratorCreateNestedManyWithoutProjectsInput";
import { DesignCreateNestedManyWithoutProjectsInput } from "./DesignCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  collaborators?: CollaboratorCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  designs?: DesignCreateNestedManyWithoutProjectsInput;
  owner?: string | null;
  title?: string | null;
};
