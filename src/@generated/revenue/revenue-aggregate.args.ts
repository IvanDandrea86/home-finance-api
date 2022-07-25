import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereInput } from './revenue-where.input';
import { Type } from 'class-transformer';
import { RevenueOrderByWithRelationInput } from './revenue-order-by-with-relation.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RevenueCountAggregateInput } from './revenue-count-aggregate.input';
import { RevenueMinAggregateInput } from './revenue-min-aggregate.input';
import { RevenueMaxAggregateInput } from './revenue-max-aggregate.input';

@ArgsType()
export class RevenueAggregateArgs {

    @Field(() => RevenueWhereInput, {nullable:true})
    @Type(() => RevenueWhereInput)
    where?: RevenueWhereInput;

    @Field(() => [RevenueOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RevenueOrderByWithRelationInput>;

    @Field(() => RevenueWhereUniqueInput, {nullable:true})
    cursor?: RevenueWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RevenueCountAggregateInput, {nullable:true})
    _count?: RevenueCountAggregateInput;

    @Field(() => RevenueMinAggregateInput, {nullable:true})
    _min?: RevenueMinAggregateInput;

    @Field(() => RevenueMaxAggregateInput, {nullable:true})
    _max?: RevenueMaxAggregateInput;
}
