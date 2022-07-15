import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FamilyCountAggregate } from './family-count-aggregate.output';
import { FamilyMinAggregate } from './family-min-aggregate.output';
import { FamilyMaxAggregate } from './family-max-aggregate.output';

@ObjectType()
export class AggregateFamily {
  @Field(() => FamilyCountAggregate, { nullable: true })
  _count?: FamilyCountAggregate;

  @Field(() => FamilyMinAggregate, { nullable: true })
  _min?: FamilyMinAggregate;

  @Field(() => FamilyMaxAggregate, { nullable: true })
  _max?: FamilyMaxAggregate;
}
