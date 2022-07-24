import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MandateCountAggregate } from './mandate-count-aggregate.output';
import { MandateMinAggregate } from './mandate-min-aggregate.output';
import { MandateMaxAggregate } from './mandate-max-aggregate.output';

@ObjectType()
export class AggregateMandate {
  @Field(() => MandateCountAggregate, { nullable: true })
  _count?: MandateCountAggregate;

  @Field(() => MandateMinAggregate, { nullable: true })
  _min?: MandateMinAggregate;

  @Field(() => MandateMaxAggregate, { nullable: true })
  _max?: MandateMaxAggregate;
}
