import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateManyWithoutFamilyNestedInput } from '../user/user-update-many-without-family-nested.input';
import { RevenueUpdateManyWithoutFamilyNestedInput } from '../revenue/revenue-update-many-without-family-nested.input';
import { AccountUpdateManyWithoutFamilyNestedInput } from '../account/account-update-many-without-family-nested.input';

@InputType()
export class FamilyUpdateWithoutExpensesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutFamilyNestedInput, {nullable:true})
    members?: UserUpdateManyWithoutFamilyNestedInput;

    @Field(() => RevenueUpdateManyWithoutFamilyNestedInput, {nullable:true})
    revenues?: RevenueUpdateManyWithoutFamilyNestedInput;

    @Field(() => AccountUpdateManyWithoutFamilyNestedInput, {nullable:true})
    accounts?: AccountUpdateManyWithoutFamilyNestedInput;
}
