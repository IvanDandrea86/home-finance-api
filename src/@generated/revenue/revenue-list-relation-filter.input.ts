import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereInput } from './revenue-where.input';

@InputType()
export class RevenueListRelationFilter {
  @Field(() => RevenueWhereInput, { nullable: true })
  every?: RevenueWhereInput;

  @Field(() => RevenueWhereInput, { nullable: true })
  some?: RevenueWhereInput;

  @Field(() => RevenueWhereInput, { nullable: true })
  none?: RevenueWhereInput;
}
