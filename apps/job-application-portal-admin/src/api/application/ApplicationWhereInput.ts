import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobListingWhereUniqueInput } from "../jobListing/JobListingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ApplicationWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  id?: StringFilter;
  jobListing?: JobListingWhereUniqueInput;
  status?: "Option1";
  submissionDate?: DateTimeNullableFilter;
};
