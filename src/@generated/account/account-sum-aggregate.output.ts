import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AccountSumAggregate {
  @Field(() => Float, { nullable: true })
  monthlyBudget?: number;

  @Field(() => Float, { nullable: true })
  sold?: number;
}
