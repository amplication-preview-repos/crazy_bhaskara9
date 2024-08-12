import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
