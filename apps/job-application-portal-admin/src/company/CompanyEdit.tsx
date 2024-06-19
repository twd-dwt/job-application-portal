import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { JobListingTitle } from "../jobListing/JobListingTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <ReferenceArrayInput
          source="jobListings"
          reference="JobListing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobListingTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
