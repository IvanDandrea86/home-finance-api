import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DetailUpdateManyWithoutExpenseNestedInput } from '../detail/detail-update-many-without-expense-nested.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { FamilyUpdateOneWithoutExpensesNestedInput } from '../family/family-update-one-without-expenses-nested.input';

@InputType()
export class ExpenseUpdateWithoutAccountInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => DetailUpdateManyWithoutExpenseNestedInput, { nullable: true })
  expenseDetails?: DetailUpdateManyWithoutExpenseNestedInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: FloatFieldUpdateOperationsInput;

  @Field(() => FamilyUpdateOneWithoutExpensesNestedInput, { nullable: true })
  Family?: FamilyUpdateOneWithoutExpensesNestedInput;
}
