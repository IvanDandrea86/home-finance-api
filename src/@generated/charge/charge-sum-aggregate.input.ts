import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChargeSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cost?: true;
}
