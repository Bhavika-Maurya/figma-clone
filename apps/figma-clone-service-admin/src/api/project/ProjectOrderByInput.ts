import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
