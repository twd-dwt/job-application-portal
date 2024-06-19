import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { JobListingWhereUniqueInput } from "../jobListing/JobListingWhereUniqueInput";

export type ApplicationUpdateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  jobListing?: JobListingWhereUniqueInput | null;
  status?: "Option1" | null;
  submissionDate?: Date | null;
};
