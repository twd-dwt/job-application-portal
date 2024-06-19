import { Applicant } from "../applicant/Applicant";
import { JobListing } from "../jobListing/JobListing";

export type Application = {
  applicant?: Applicant | null;
  createdAt: Date;
  id: string;
  jobListing?: JobListing | null;
  status?: "Option1" | null;
  submissionDate: Date | null;
  updatedAt: Date;
};
