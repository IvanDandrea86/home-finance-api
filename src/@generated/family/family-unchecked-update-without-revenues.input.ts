import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFamilyNestedInput } from '../user/user-unchecked-update-many-without-family-nested.input';
import { ExpenseUncheckedUpdateManyWithoutFamilyNestedInput } from '../expense/expense-unchecked-update-many-without-family-nested.input';
import { AccountUncheckedUpdateManyWithoutFamilyNestedInput } from '../account/account-unchecked-update-many-without-family-nested.input';

@InputType()
export class FamilyUncheckedUpdateWithoutRevenuesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutFamilyNestedInput, {nullable:true})
    members?: UserUncheckedUpdateManyWithoutFamilyNestedInput;

    @Field(() => ExpenseUncheckedUpdateManyWithoutFamilyNestedInput, {nullable:true})
    expenses?: ExpenseUncheckedUpdateManyWithoutFamilyNestedInput;

    @Field(() => AccountUncheckedUpdateManyWithoutFamilyNestedInput, {nullable:true})
    accounts?: AccountUncheckedUpdateManyWithoutFamilyNestedInput;
}
