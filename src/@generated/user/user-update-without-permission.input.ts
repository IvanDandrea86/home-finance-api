import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumVerificationStatusFieldUpdateOperationsInput } from '../prisma/enum-verification-status-field-update-operations.input';
import { FamilyUpdateOneWithoutMembersInput } from '../family/family-update-one-without-members.input';
import { RevenueUpdateManyWithoutUserInput } from '../revenue/revenue-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutPermissionInput {
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

  @Field(() => FamilyUpdateOneWithoutMembersInput, { nullable: true })
  Family?: FamilyUpdateOneWithoutMembersInput;

  @Field(() => RevenueUpdateManyWithoutUserInput, { nullable: true })
  Revenue?: RevenueUpdateManyWithoutUserInput;
}
