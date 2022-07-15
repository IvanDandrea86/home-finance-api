import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExpenseDetailsSumAggregate {
  @Field(() => Int, { nullable: true })
  monthlyCost?: number;
}
