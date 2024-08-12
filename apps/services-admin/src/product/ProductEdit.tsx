import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
