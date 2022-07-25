import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereInput } from './revenue-where.input';
import { Type } from 'class-transformer';
import { RevenueOrderByWithAggregationInput } from './revenue-order-by-with-aggregation.input';
import { RevenueScalarFieldEnum } from './revenue-scalar-field.enum';
import { RevenueScalarWhereWithAggregatesInput } from './revenue-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RevenueCountAggregateInput } from './revenue-count-aggregate.input';
import { RevenueMinAggregateInput } from './revenue-min-aggregate.input';
import { RevenueMaxAggregateInput } from './revenue-max-aggregate.input';

@ArgsType()
export class RevenueGroupByArgs {

    @Field(() => RevenueWhereInput, {nullable:true})
    @Type(() => RevenueWhereInput)
    where?: RevenueWhereInput;

    @Field(() => [RevenueOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RevenueOrderByWithAggregationInput>;

    @Field(() => [RevenueScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RevenueScalarFieldEnum>;

    @Field(() => RevenueScalarWhereWithAggregatesInput, {nullable:true})
    having?: RevenueScalarWhereWithAggregatesInput;

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
