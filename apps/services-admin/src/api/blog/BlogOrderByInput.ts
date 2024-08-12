import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
