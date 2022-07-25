import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumVerificationStatusFieldUpdateOperationsInput } from '../prisma/enum-verification-status-field-update-operations.input';
import { PermissionUpdateOneWithoutUserNestedInput } from '../permission/permission-update-one-without-user-nested.input';
import { FamilyUpdateOneWithoutMembersNestedInput } from '../family/family-update-one-without-members-nested.input';
import { RevenueUpdateManyWithoutUserNestedInput } from '../revenue/revenue-update-many-without-user-nested.input';
import { DetailUpdateManyWithoutUserNestedInput } from '../detail/detail-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

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

    @Field(() => PermissionUpdateOneWithoutUserNestedInput, {nullable:true})
    Permission?: PermissionUpdateOneWithoutUserNestedInput;

    @Field(() => FamilyUpdateOneWithoutMembersNestedInput, {nullable:true})
    Family?: FamilyUpdateOneWithoutMembersNestedInput;

    @Field(() => RevenueUpdateManyWithoutUserNestedInput, {nullable:true})
    Revenue?: RevenueUpdateManyWithoutUserNestedInput;

    @Field(() => DetailUpdateManyWithoutUserNestedInput, {nullable:true})
    Mandate?: DetailUpdateManyWithoutUserNestedInput;
}
