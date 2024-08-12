import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  title?: StringNullableFilter;
};
