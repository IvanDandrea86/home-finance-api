import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFamilyInput } from '../user/user-unchecked-update-many-without-family.input';
import { RevenueUncheckedUpdateManyWithoutFamilyInput } from '../revenue/revenue-unchecked-update-many-without-family.input';

@InputType()
export class FamilyUncheckedUpdateWithoutExpensesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutFamilyInput, { nullable: true })
  members?: UserUncheckedUpdateManyWithoutFamilyInput;

  @Field(() => RevenueUncheckedUpdateManyWithoutFamilyInput, { nullable: true })
  revenues?: RevenueUncheckedUpdateManyWithoutFamilyInput;
}
