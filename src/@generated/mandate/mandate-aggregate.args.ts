import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';
import { Type } from 'class-transformer';
import { MandateOrderByWithRelationInput } from './mandate-order-by-with-relation.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MandateCountAggregateInput } from './mandate-count-aggregate.input';
import { MandateMinAggregateInput } from './mandate-min-aggregate.input';
import { MandateMaxAggregateInput } from './mandate-max-aggregate.input';

@ArgsType()
export class MandateAggregateArgs {
  @Field(() => MandateWhereInput, { nullable: true })
  @Type(() => MandateWhereInput)
  where?: MandateWhereInput;

  @Field(() => [MandateOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MandateOrderByWithRelationInput>;

  @Field(() => MandateWhereUniqueInput, { nullable: true })
  cursor?: MandateWhereUniqueInput;

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
