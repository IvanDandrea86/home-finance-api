import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VerificationStatus } from '../prisma/verification-status.enum';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  validationToken?: string;

  @Field(() => Date, { nullable: true })
  lastLogin?: Date | string;

  @Field(() => VerificationStatus, { nullable: true })
  verificationStatus?: keyof typeof VerificationStatus;

  @Field(() => String, { nullable: true })
  familyId?: string;
}
