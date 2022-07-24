import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { FamilyUpdateOneWithoutExpensesNestedInput } from '../family/family-update-one-without-expenses-nested.input';
import { AccountUpdateOneWithoutExpenseNestedInput } from '../account/account-update-one-without-expense-nested.input';

@InputType()
export class ExpenseUpdateWithoutExpenseDetailsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  monthlyCost?: FloatFieldUpdateOperationsInput;

  @Field(() => FamilyUpdateOneWithoutExpensesNestedInput, { nullable: true })
  Family?: FamilyUpdateOneWithoutExpensesNestedInput;

  @Field(() => AccountUpdateOneWithoutExpenseNestedInput, { nullable: true })
  Account?: AccountUpdateOneWithoutExpenseNestedInput;
}
