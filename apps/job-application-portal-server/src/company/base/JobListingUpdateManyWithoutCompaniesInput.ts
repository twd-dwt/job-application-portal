/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { JobListingWhereUniqueInput } from "../../jobListing/base/JobListingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class JobListingUpdateManyWithoutCompaniesInput {
  @Field(() => [JobListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobListingWhereUniqueInput],
  })
  connect?: Array<JobListingWhereUniqueInput>;

  @Field(() => [JobListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobListingWhereUniqueInput],
  })
  disconnect?: Array<JobListingWhereUniqueInput>;

  @Field(() => [JobListingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobListingWhereUniqueInput],
  })
  set?: Array<JobListingWhereUniqueInput>;
}

export { JobListingUpdateManyWithoutCompaniesInput as JobListingUpdateManyWithoutCompaniesInput };
