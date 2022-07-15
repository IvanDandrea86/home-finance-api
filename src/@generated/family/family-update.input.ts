import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateManyWithoutFamilyInput } from '../user/user-update-many-without-family.input';
import { ExpenseUpdateManyWithoutFamilyInput } from '../expense/expense-update-many-without-family.input';
import { RevenueUpdateManyWithoutFamilyInput } from '../revenue/revenue-update-many-without-family.input';

@InputType()
export class FamilyUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateManyWithoutFamilyInput, { nullable: true })
  members?: UserUpdateManyWithoutFamilyInput;

  @Field(() => ExpenseUpdateManyWithoutFamilyInput, { nullable: true })
  expenses?: ExpenseUpdateManyWithoutFamilyInput;

  @Field(() => RevenueUpdateManyWithoutFamilyInput, { nullable: true })
  revenues?: RevenueUpdateManyWithoutFamilyInput;
}
