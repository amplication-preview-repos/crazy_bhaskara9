import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
