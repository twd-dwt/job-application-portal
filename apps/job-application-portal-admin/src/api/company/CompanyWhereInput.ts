import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobListingListRelationFilter } from "../jobListing/JobListingListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  jobListings?: JobListingListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
