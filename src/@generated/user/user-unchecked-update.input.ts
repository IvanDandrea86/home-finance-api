import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumVerificationStatusFieldUpdateOperationsInput } from '../prisma/enum-verification-status-field-update-operations.input';
import { PermissionUncheckedUpdateOneWithoutUserNestedInput } from '../permission/permission-unchecked-update-one-without-user-nested.input';
import { RevenueUncheckedUpdateManyWithoutUserNestedInput } from '../revenue/revenue-unchecked-update-many-without-user-nested.input';
import { DetailUncheckedUpdateManyWithoutUserNestedInput } from '../detail/detail-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    validationToken?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumVerificationStatusFieldUpdateOperationsInput, {nullable:true})
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput;

    @Field(() => PermissionUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    Permission?: PermissionUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    familyId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RevenueUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Revenue?: RevenueUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => DetailUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    Mandate?: DetailUncheckedUpdateManyWithoutUserNestedInput;
}
