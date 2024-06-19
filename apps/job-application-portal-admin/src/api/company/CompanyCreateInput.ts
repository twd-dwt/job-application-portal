import { JobListingCreateNestedManyWithoutCompaniesInput } from "./JobListingCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  industry?: string | null;
  jobListings?: JobListingCreateNestedManyWithoutCompaniesInput;
  location?: string | null;
  name?: string | null;
  website?: string | null;
};
