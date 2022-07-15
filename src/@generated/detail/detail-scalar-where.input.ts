import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class DetailScalarWhereInput {
  @Field(() => [DetailScalarWhereInput], { nullable: true })
  AND?: Array<DetailScalarWhereInput>;

  @Field(() => [DetailScalarWhereInput], { nullable: true })
  OR?: Array<DetailScalarWhereInput>;

  @Field(() => [DetailScalarWhereInput], { nullable: true })
  NOT?: Array<DetailScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  expenseId?: StringNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  monthlyCost?: IntFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  period?: IntNullableFilter;
}
