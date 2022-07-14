import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumVerificationStatusFilter } from '../prisma/enum-verification-status-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  lastName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  password?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  validationToken?: StringFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  lastLogin?: DateTimeNullableFilter;

  @Field(() => EnumVerificationStatusFilter, { nullable: true })
  verificationStatus?: EnumVerificationStatusFilter;

  @Field(() => PermissionRelationFilter, { nullable: true })
  permission?: PermissionRelationFilter;
}