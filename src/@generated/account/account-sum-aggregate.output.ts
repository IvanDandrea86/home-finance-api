import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountSumAggregate {
  @Field(() => Int, { nullable: true })
  monthlyBudget?: number;

  @Field(() => Int, { nullable: true })
  sold?: number;
}
