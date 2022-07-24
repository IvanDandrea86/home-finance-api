import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ExpenseUpdateOneWithoutExpenseDetailsNestedInput } from '../expense/expense-update-one-without-expense-details-nested.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class DetailUpdateWithoutMandateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => ExpenseUpdateOneWithoutExpenseDetailsNestedInput, {
    nullable: true,
  })
  Expense?: ExpenseUpdateOneWithoutExpenseDetailsNestedInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  cost?: FloatFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  period?: NullableIntFieldUpdateOperationsInput;
}
