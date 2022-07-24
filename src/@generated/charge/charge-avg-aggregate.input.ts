import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChargeAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cost?: true;
}
