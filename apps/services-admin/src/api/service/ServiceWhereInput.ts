import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServiceWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  title?: StringNullableFilter;
};
