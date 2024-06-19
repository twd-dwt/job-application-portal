import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicantId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobListingId?: SortOrder;
  status?: SortOrder;
  submissionDate?: SortOrder;
  updatedAt?: SortOrder;
};
