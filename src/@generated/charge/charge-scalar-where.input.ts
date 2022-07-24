import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ChargeScalarWhereInput {
  @Field(() => [ChargeScalarWhereInput], { nullable: true })
  AND?: Array<ChargeScalarWhereInput>;

  @Field(() => [ChargeScalarWhereInput], { nullable: true })
  OR?: Array<ChargeScalarWhereInput>;

  @Field(() => [ChargeScalarWhereInput], { nullable: true })
  NOT?: Array<ChargeScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => FloatFilter, { nullable: true })
  cost?: FloatFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  accountId?: StringNullableFilter;
}
