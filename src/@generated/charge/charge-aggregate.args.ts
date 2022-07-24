import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereInput } from './charge-where.input';
import { Type } from 'class-transformer';
import { ChargeOrderByWithRelationInput } from './charge-order-by-with-relation.input';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChargeCountAggregateInput } from './charge-count-aggregate.input';
import { ChargeAvgAggregateInput } from './charge-avg-aggregate.input';
import { ChargeSumAggregateInput } from './charge-sum-aggregate.input';
import { ChargeMinAggregateInput } from './charge-min-aggregate.input';
import { ChargeMaxAggregateInput } from './charge-max-aggregate.input';

@ArgsType()
export class ChargeAggregateArgs {
  @Field(() => ChargeWhereInput, { nullable: true })
  @Type(() => ChargeWhereInput)
  where?: ChargeWhereInput;

  @Field(() => [ChargeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ChargeOrderByWithRelationInput>;

  @Field(() => ChargeWhereUniqueInput, { nullable: true })
  cursor?: ChargeWhereUniqueInput;

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
