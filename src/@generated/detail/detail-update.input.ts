import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExpenseUpdateOneWithoutExpenseDetailsNestedInput } from '../expense/expense-update-one-without-expense-details-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class DetailUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => ExpenseUpdateOneWithoutExpenseDetailsNestedInput, {
    nullable: true,
  })
  Expense?: ExpenseUpdateOneWithoutExpenseDetailsNestedInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: IntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  period?: NullableIntFieldUpdateOperationsInput;
}
