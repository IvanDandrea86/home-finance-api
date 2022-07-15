import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExpenseUpdateOneWithoutExpenseDetailsInput } from '../expense/expense-update-one-without-expense-details.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ExpenseDetailsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => ExpenseUpdateOneWithoutExpenseDetailsInput, { nullable: true })
  Expense?: ExpenseUpdateOneWithoutExpenseDetailsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: IntFieldUpdateOperationsInput;
}
