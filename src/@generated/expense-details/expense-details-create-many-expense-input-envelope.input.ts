import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsCreateManyExpenseInput } from './expense-details-create-many-expense.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseDetailsCreateManyExpenseInputEnvelope {
  @Field(() => [ExpenseDetailsCreateManyExpenseInput], { nullable: false })
  @Type(() => ExpenseDetailsCreateManyExpenseInput)
  data!: Array<ExpenseDetailsCreateManyExpenseInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
