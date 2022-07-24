import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';
import { Type } from 'class-transformer';
import { MandateOrderByWithAggregationInput } from './mandate-order-by-with-aggregation.input';
import { MandateScalarFieldEnum } from './mandate-scalar-field.enum';
import { MandateScalarWhereWithAggregatesInput } from './mandate-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MandateCountAggregateInput } from './mandate-count-aggregate.input';
import { MandateMinAggregateInput } from './mandate-min-aggregate.input';
import { MandateMaxAggregateInput } from './mandate-max-aggregate.input';

@ArgsType()
export class MandateGroupByArgs {
  @Field(() => MandateWhereInput, { nullable: true })
  @Type(() => MandateWhereInput)
  where?: MandateWhereInput;

  @Field(() => [MandateOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<MandateOrderByWithAggregationInput>;

  @Field(() => [MandateScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MandateScalarFieldEnum>;

  @Field(() => MandateScalarWhereWithAggregatesInput, { nullable: true })
  having?: MandateScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MandateCountAggregateInput, { nullable: true })
  _count?: MandateCountAggregateInput;

  @Field(() => MandateMinAggregateInput, { nullable: true })
  _min?: MandateMinAggregateInput;

  @Field(() => MandateMaxAggregateInput, { nullable: true })
  _max?: MandateMaxAggregateInput;
}
