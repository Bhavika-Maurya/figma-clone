import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Design = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  project?: Project | null;
  updatedAt: Date;
};
