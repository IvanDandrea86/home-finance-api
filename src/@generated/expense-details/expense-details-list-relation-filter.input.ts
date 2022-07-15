import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';

@InputType()
export class ExpenseDetailsListRelationFilter {
  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  every?: ExpenseDetailsWhereInput;

  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  some?: ExpenseDetailsWhereInput;

  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  none?: ExpenseDetailsWhereInput;
}
