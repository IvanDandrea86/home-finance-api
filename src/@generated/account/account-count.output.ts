import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AccountCount {
  @Field(() => Int, { nullable: false })
  charge?: number;

  @Field(() => Int, { nullable: false })
  Expense?: number;
}
