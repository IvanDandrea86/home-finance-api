import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from '../prisma/verification-status.enum';
import { PermissionCreateNestedOneWithoutUserInput } from '../permission/permission-create-nested-one-without-user.input';
import { RevenueCreateNestedManyWithoutUserInput } from '../revenue/revenue-create-nested-many-without-user.input';
import { DetailCreateNestedManyWithoutUserInput } from '../detail/detail-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutFamilyInput {
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

  @Field(() => RevenueCreateNestedManyWithoutUserInput, { nullable: true })
  Revenue?: RevenueCreateNestedManyWithoutUserInput;

  @Field(() => DetailCreateNestedManyWithoutUserInput, { nullable: true })
  Mandate?: DetailCreateNestedManyWithoutUserInput;
}
