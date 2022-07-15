import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DetailSumAggregate {
  @Field(() => Int, { nullable: true })
  monthlyCost?: number;

  @Field(() => Int, { nullable: true })
  period?: number;
}
