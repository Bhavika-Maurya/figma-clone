import { CollaboratorListRelationFilter } from "../collaborator/CollaboratorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DesignListRelationFilter } from "../design/DesignListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  collaborators?: CollaboratorListRelationFilter;
  description?: StringNullableFilter;
  designs?: DesignListRelationFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
};
