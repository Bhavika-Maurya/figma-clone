import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type DesignUpdateInput = {
  content?: InputJsonValue;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
