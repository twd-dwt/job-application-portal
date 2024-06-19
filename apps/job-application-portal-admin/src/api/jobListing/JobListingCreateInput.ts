import { ApplicationCreateNestedManyWithoutJobListingsInput } from "./ApplicationCreateNestedManyWithoutJobListingsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobListingCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobListingsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
