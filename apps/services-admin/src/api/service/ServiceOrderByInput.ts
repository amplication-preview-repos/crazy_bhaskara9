import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
