import { Design as TDesign } from "../api/design/Design";

export const DESIGN_TITLE_FIELD = "name";

export const DesignTitle = (record: TDesign): string => {
  return record.name?.toString() || String(record.id);
};
