import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CollaboratorCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  role?: string | null;
  user?: UserWhereUniqueInput | null;
};
