import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ChargeCountAggregate } from './charge-count-aggregate.output';
import { ChargeAvgAggregate } from './charge-avg-aggregate.output';
import { ChargeSumAggregate } from './charge-sum-aggregate.output';
import { ChargeMinAggregate } from './charge-min-aggregate.output';
import { ChargeMaxAggregate } from './charge-max-aggregate.output';

@ObjectType()
export class ChargeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Float, {nullable:false})
    cost!: number;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => ChargeCountAggregate, {nullable:true})
    _count?: ChargeCountAggregate;

    @Field(() => ChargeAvgAggregate, {nullable:true})
    _avg?: ChargeAvgAggregate;

    @Field(() => ChargeSumAggregate, {nullable:true})
    _sum?: ChargeSumAggregate;

    @Field(() => ChargeMinAggregate, {nullable:true})
    _min?: ChargeMinAggregate;

    @Field(() => ChargeMaxAggregate, {nullable:true})
    _max?: ChargeMaxAggregate;
}
