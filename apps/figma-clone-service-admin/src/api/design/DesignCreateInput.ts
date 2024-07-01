import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type DesignCreateInput = {
  content?: InputJsonValue;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
