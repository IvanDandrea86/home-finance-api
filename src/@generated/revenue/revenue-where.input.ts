import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FamilyRelationFilter } from '../family/family-relation-filter.input';

@InputType()
export class RevenueWhereInput {
  @Field(() => [RevenueWhereInput], { nullable: true })
  AND?: Array<RevenueWhereInput>;

  @Field(() => [RevenueWhereInput], { nullable: true })
  OR?: Array<RevenueWhereInput>;

  @Field(() => [RevenueWhereInput], { nullable: true })
  NOT?: Array<RevenueWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter;

  @Field(() => FamilyRelationFilter, { nullable: true })
  Family?: FamilyRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  familyId?: StringFilter;
}
