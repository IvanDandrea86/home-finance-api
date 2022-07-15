import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RevenueScalarWhereInput {
  @Field(() => [RevenueScalarWhereInput], { nullable: true })
  AND?: Array<RevenueScalarWhereInput>;

  @Field(() => [RevenueScalarWhereInput], { nullable: true })
  OR?: Array<RevenueScalarWhereInput>;

  @Field(() => [RevenueScalarWhereInput], { nullable: true })
  NOT?: Array<RevenueScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  familyId?: StringFilter;
}
