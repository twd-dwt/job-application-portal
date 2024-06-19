import { JobListing } from "../jobListing/JobListing";

export type Company = {
  createdAt: Date;
  id: string;
  industry: string | null;
  jobListings?: Array<JobListing>;
  location: string | null;
  name: string | null;
  updatedAt: Date;
  website: string | null;
};
