import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DetailRelationFilter } from '../detail/detail-relation-filter.input';

@InputType()
export class MandateWhereInput {
  @Field(() => [MandateWhereInput], { nullable: true })
  AND?: Array<MandateWhereInput>;

  @Field(() => [MandateWhereInput], { nullable: true })
  OR?: Array<MandateWhereInput>;

  @Field(() => [MandateWhereInput], { nullable: true })
  NOT?: Array<MandateWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  status?: BoolFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => DetailRelationFilter, { nullable: true })
  detail?: DetailRelationFilter;
}
