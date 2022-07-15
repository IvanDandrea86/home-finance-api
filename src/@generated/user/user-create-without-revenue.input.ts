import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from '../prisma/verification-status.enum';
import { PermissionCreateNestedOneWithoutUserInput } from '../permission/permission-create-nested-one-without-user.input';
import { FamilyCreateNestedOneWithoutMembersInput } from '../family/family-create-nested-one-without-members.input';

@InputType()
export class UserCreateWithoutRevenueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: false })
  validationToken!: string;

  @Field(() => Date, { nullable: true })
  lastLogin?: Date | string;

  @Field(() => VerificationStatus, { nullable: true })
  verificationStatus?: keyof typeof VerificationStatus;

  @Field(() => PermissionCreateNestedOneWithoutUserInput, { nullable: true })
  Permission?: PermissionCreateNestedOneWithoutUserInput;

  @Field(() => FamilyCreateNestedOneWithoutMembersInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutMembersInput;
}
