import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DetailCountAggregate } from './detail-count-aggregate.output';
import { DetailAvgAggregate } from './detail-avg-aggregate.output';
import { DetailSumAggregate } from './detail-sum-aggregate.output';
import { DetailMinAggregate } from './detail-min-aggregate.output';
import { DetailMaxAggregate } from './detail-max-aggregate.output';

@ObjectType()
export class AggregateDetail {

    @Field(() => DetailCountAggregate, {nullable:true})
    _count?: DetailCountAggregate;

    @Field(() => DetailAvgAggregate, {nullable:true})
    _avg?: DetailAvgAggregate;

    @Field(() => DetailSumAggregate, {nullable:true})
    _sum?: DetailSumAggregate;

    @Field(() => DetailMinAggregate, {nullable:true})
    _min?: DetailMinAggregate;

    @Field(() => DetailMaxAggregate, {nullable:true})
    _max?: DetailMaxAggregate;
}
