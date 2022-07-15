import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumVerificationStatusFieldUpdateOperationsInput } from '../prisma/enum-verification-status-field-update-operations.input';
import { PermissionUncheckedUpdateOneWithoutUserInput } from '../permission/permission-unchecked-update-one-without-user.input';
import { RevenueUncheckedUpdateManyWithoutUserInput } from '../revenue/revenue-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutFamilyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  password?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  validationToken?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  lastLogin?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => EnumVerificationStatusFieldUpdateOperationsInput, {
    nullable: true,
  })
  verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput;

  @Field(() => PermissionUncheckedUpdateOneWithoutUserInput, { nullable: true })
  Permission?: PermissionUncheckedUpdateOneWithoutUserInput;

  @Field(() => RevenueUncheckedUpdateManyWithoutUserInput, { nullable: true })
  Revenue?: RevenueUncheckedUpdateManyWithoutUserInput;
}
