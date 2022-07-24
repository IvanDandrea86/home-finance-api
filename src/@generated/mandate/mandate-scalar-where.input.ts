import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class MandateScalarWhereInput {
  @Field(() => [MandateScalarWhereInput], { nullable: true })
  AND?: Array<MandateScalarWhereInput>;

  @Field(() => [MandateScalarWhereInput], { nullable: true })
  OR?: Array<MandateScalarWhereInput>;

  @Field(() => [MandateScalarWhereInput], { nullable: true })
  NOT?: Array<MandateScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  status?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;
}
