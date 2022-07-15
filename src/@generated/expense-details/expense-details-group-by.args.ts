import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsOrderByWithAggregationInput } from './expense-details-order-by-with-aggregation.input';
import { ExpenseDetailsScalarFieldEnum } from './expense-details-scalar-field.enum';
import { ExpenseDetailsScalarWhereWithAggregatesInput } from './expense-details-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExpenseDetailsCountAggregateInput } from './expense-details-count-aggregate.input';
import { ExpenseDetailsAvgAggregateInput } from './expense-details-avg-aggregate.input';
import { ExpenseDetailsSumAggregateInput } from './expense-details-sum-aggregate.input';
import { ExpenseDetailsMinAggregateInput } from './expense-details-min-aggregate.input';
import { ExpenseDetailsMaxAggregateInput } from './expense-details-max-aggregate.input';

@ArgsType()
export class ExpenseDetailsGroupByArgs {
  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  @Type(() => ExpenseDetailsWhereInput)
  where?: ExpenseDetailsWhereInput;

  @Field(() => [ExpenseDetailsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ExpenseDetailsOrderByWithAggregationInput>;

  @Field(() => [ExpenseDetailsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ExpenseDetailsScalarFieldEnum>;

  @Field(() => ExpenseDetailsScalarWhereWithAggregatesInput, { nullable: true })
  having?: ExpenseDetailsScalarWhereWithAggregatesInput;

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
