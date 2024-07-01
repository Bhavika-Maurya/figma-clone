import { Collaborator as TCollaborator } from "../api/collaborator/Collaborator";

export const COLLABORATOR_TITLE_FIELD = "role";

export const CollaboratorTitle = (record: TCollaborator): string => {
  return record.role?.toString() || String(record.id);
};
