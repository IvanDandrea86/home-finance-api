import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsOrderByWithRelationInput } from './expense-details-order-by-with-relation.input';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpenseDetailsCountAggregateInput } from './expense-details-count-aggregate.input';
import { ExpenseDetailsAvgAggregateInput } from './expense-details-avg-aggregate.input';
import { ExpenseDetailsSumAggregateInput } from './expense-details-sum-aggregate.input';
import { ExpenseDetailsMinAggregateInput } from './expense-details-min-aggregate.input';
import { ExpenseDetailsMaxAggregateInput } from './expense-details-max-aggregate.input';

@ArgsType()
export class ExpenseDetailsAggregateArgs {
  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  @Type(() => ExpenseDetailsWhereInput)
  where?: ExpenseDetailsWhereInput;

  @Field(() => [ExpenseDetailsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ExpenseDetailsOrderByWithRelationInput>;

  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: true })
  cursor?: ExpenseDetailsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ExpenseDetailsCountAggregateInput, { nullable: true })
  _count?: ExpenseDetailsCountAggregateInput;

  @Field(() => ExpenseDetailsAvgAggregateInput, { nullable: true })
  _avg?: ExpenseDetailsAvgAggregateInput;

  @Field(() => ExpenseDetailsSumAggregateInput, { nullable: true })
  _sum?: ExpenseDetailsSumAggregateInput;

  @Field(() => ExpenseDetailsMinAggregateInput, { nullable: true })
  _min?: ExpenseDetailsMinAggregateInput;

  @Field(() => ExpenseDetailsMaxAggregateInput, { nullable: true })
  _max?: ExpenseDetailsMaxAggregateInput;
}
