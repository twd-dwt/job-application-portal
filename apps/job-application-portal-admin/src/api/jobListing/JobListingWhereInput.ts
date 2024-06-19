import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobListingWhereInput = {
  applications?: ApplicationListRelationFilter;
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  salary?: FloatNullableFilter;
  title?: StringNullableFilter;
};
