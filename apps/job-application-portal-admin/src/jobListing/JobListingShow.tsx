import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";
import { JOBLISTING_TITLE_FIELD } from "./JobListingTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const JobListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="salary" source="salary" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="jobListingId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Applicant"
              source="applicant.id"
              reference="Applicant"
            >
              <TextField source={APPLICANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobListing"
              source="joblisting.id"
              reference="JobListing"
            >
              <TextField source={JOBLISTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="submissionDate" source="submissionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
