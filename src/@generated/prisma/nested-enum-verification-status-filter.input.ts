import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from './verification-status.enum';

@InputType()
export class NestedEnumVerificationStatusFilter {
  @Field(() => VerificationStatus, { nullable: true })
  equals?: keyof typeof VerificationStatus;

  @Field(() => [VerificationStatus], { nullable: true })
  in?: Array<keyof typeof VerificationStatus>;

  @Field(() => [VerificationStatus], { nullable: true })
  notIn?: Array<keyof typeof VerificationStatus>;

  @Field(() => NestedEnumVerificationStatusFilter, { nullable: true })
  not?: NestedEnumVerificationStatusFilter;
}
