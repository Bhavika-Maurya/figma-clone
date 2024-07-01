import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CollaboratorWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  role?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
