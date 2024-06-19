/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicantWhereUniqueInput } from "../../applicant/base/ApplicantWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { JobListingWhereUniqueInput } from "../../jobListing/base/JobListingWhereUniqueInput";
import { EnumApplicationStatus } from "./EnumApplicationStatus";

@InputType()
class ApplicationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicantWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicantWhereUniqueInput, {
    nullable: true,
  })
  applicant?: ApplicantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => JobListingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobListingWhereUniqueInput)
  @IsOptional()
  @Field(() => JobListingWhereUniqueInput, {
    nullable: true,
  })
  jobListing?: JobListingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumApplicationStatus,
  })
  @IsEnum(EnumApplicationStatus)
  @IsOptional()
  @Field(() => EnumApplicationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  submissionDate?: Date | null;
}

export { ApplicationUpdateInput as ApplicationUpdateInput };