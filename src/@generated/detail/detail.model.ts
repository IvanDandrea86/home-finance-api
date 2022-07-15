import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Expense } from '../expense/expense.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Detail {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Expense, { nullable: true })
  Expense?: Expense | null;

  @Field(() => String, { nullable: true })
  expenseId!: string | null;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  monthlyCost!: number;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  period!: number | null;
}
