import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FamilyCountAggregate } from './family-count-aggregate.output';
import { FamilyMinAggregate } from './family-min-aggregate.output';
import { FamilyMaxAggregate } from './family-max-aggregate.output';

@ObjectType()
export class FamilyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FamilyCountAggregate, {nullable:true})
    _count?: FamilyCountAggregate;

    @Field(() => FamilyMinAggregate, {nullable:true})
    _min?: FamilyMinAggregate;

    @Field(() => FamilyMaxAggregate, {nullable:true})
    _max?: FamilyMaxAggregate;
}
