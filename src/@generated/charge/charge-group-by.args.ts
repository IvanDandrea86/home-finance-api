import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereInput } from './charge-where.input';
import { Type } from 'class-transformer';
import { ChargeOrderByWithAggregationInput } from './charge-order-by-with-aggregation.input';
import { ChargeScalarFieldEnum } from './charge-scalar-field.enum';
import { ChargeScalarWhereWithAggregatesInput } from './charge-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChargeCountAggregateInput } from './charge-count-aggregate.input';
import { ChargeAvgAggregateInput } from './charge-avg-aggregate.input';
import { ChargeSumAggregateInput } from './charge-sum-aggregate.input';
import { ChargeMinAggregateInput } from './charge-min-aggregate.input';
import { ChargeMaxAggregateInput } from './charge-max-aggregate.input';

@ArgsType()
export class ChargeGroupByArgs {
  @Field(() => ChargeWhereInput, { nullable: true })
  @Type(() => ChargeWhereInput)
  where?: ChargeWhereInput;

  @Field(() => [ChargeOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ChargeOrderByWithAggregationInput>;

  @Field(() => [ChargeScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ChargeScalarFieldEnum>;

  @Field(() => ChargeScalarWhereWithAggregatesInput, { nullable: true })
  having?: ChargeScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ChargeCountAggregateInput, { nullable: true })
  _count?: ChargeCountAggregateInput;

  @Field(() => ChargeAvgAggregateInput, { nullable: true })
  _avg?: ChargeAvgAggregateInput;

  @Field(() => ChargeSumAggregateInput, { nullable: true })
  _sum?: ChargeSumAggregateInput;

  @Field(() => ChargeMinAggregateInput, { nullable: true })
  _min?: ChargeMinAggregateInput;

  @Field(() => ChargeMaxAggregateInput, { nullable: true })
  _max?: ChargeMaxAggregateInput;
}
