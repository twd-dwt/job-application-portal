import { JobListingUpdateManyWithoutCompaniesInput } from "./JobListingUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  industry?: string | null;
  jobListings?: JobListingUpdateManyWithoutCompaniesInput;
  location?: string | null;
  name?: string | null;
  website?: string | null;
};
