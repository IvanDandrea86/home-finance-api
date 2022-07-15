import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ExpenseDetails } from '../expense-details/expense-details.model';
import { Int } from '@nestjs/graphql';
import { Family } from '../family/family.model';
import { ExpenseCount } from './expense-count.output';

@ObjectType()
export class Expense {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [ExpenseDetails], { nullable: true })
  expenseDetails?: Array<ExpenseDetails>;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  monthlyCost!: number;

  @Field(() => Family, { nullable: true })
  Family?: Family | null;

  @Field(() => String, { nullable: true })
  familyId!: string | null;

  @Field(() => ExpenseCount, { nullable: false })
  _count?: ExpenseCount;
}
