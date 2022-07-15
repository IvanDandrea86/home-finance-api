import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DetailUpdateManyWithoutExpenseNestedInput } from '../detail/detail-update-many-without-expense-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ExpenseUpdateWithoutFamilyInput {
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

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: IntFieldUpdateOperationsInput;
}
