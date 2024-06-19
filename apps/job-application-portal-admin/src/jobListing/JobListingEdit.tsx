import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { CompanyTitle } from "../company/CompanyTitle";

export const JobListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
