import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExpenseDetailsUpdateManyWithoutExpenseInput } from '../expense-details/expense-details-update-many-without-expense.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FamilyUpdateOneWithoutExpensesInput } from '../family/family-update-one-without-expenses.input';

@InputType()
export class ExpenseUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => ExpenseDetailsUpdateManyWithoutExpenseInput, { nullable: true })
  expenseDetails?: ExpenseDetailsUpdateManyWithoutExpenseInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: IntFieldUpdateOperationsInput;

  @Field(() => FamilyUpdateOneWithoutExpensesInput, { nullable: true })
  Family?: FamilyUpdateOneWithoutExpensesInput;
}
