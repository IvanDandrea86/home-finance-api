import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RevenueCountAggregate } from './revenue-count-aggregate.output';
import { RevenueMinAggregate } from './revenue-min-aggregate.output';
import { RevenueMaxAggregate } from './revenue-max-aggregate.output';

@ObjectType()
export class AggregateRevenue {

    @Field(() => RevenueCountAggregate, {nullable:true})
    _count?: RevenueCountAggregate;

    @Field(() => RevenueMinAggregate, {nullable:true})
    _min?: RevenueMinAggregate;

    @Field(() => RevenueMaxAggregate, {nullable:true})
    _max?: RevenueMaxAggregate;
}
