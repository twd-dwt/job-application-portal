import { ApplicationUpdateManyWithoutJobListingsInput } from "./ApplicationUpdateManyWithoutJobListingsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobListingUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobListingsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
