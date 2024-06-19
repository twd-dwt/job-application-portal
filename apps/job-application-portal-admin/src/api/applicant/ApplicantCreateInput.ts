import { ApplicationCreateNestedManyWithoutApplicantsInput } from "./ApplicationCreateNestedManyWithoutApplicantsInput";
import { InputJsonValue } from "../../types";

export type ApplicantCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutApplicantsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  resume?: InputJsonValue;
};
