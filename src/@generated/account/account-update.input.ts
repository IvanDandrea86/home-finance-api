import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAccountTypeFieldUpdateOperationsInput } from '../prisma/enum-account-type-field-update-operations.input';
import { ChargeUpdateManyWithoutAccountNestedInput } from '../charge/charge-update-many-without-account-nested.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { FamilyUpdateOneWithoutAccountsNestedInput } from '../family/family-update-one-without-accounts-nested.input';
import { ExpenseUpdateManyWithoutAccountNestedInput } from '../expense/expense-update-many-without-account-nested.input';

@InputType()
export class AccountUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAccountTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAccountTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ChargeUpdateManyWithoutAccountNestedInput, {nullable:true})
    charge?: ChargeUpdateManyWithoutAccountNestedInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    monthlyBudget?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    sold?: FloatFieldUpdateOperationsInput;

    @Field(() => FamilyUpdateOneWithoutAccountsNestedInput, {nullable:true})
    Family?: FamilyUpdateOneWithoutAccountsNestedInput;

    @Field(() => ExpenseUpdateManyWithoutAccountNestedInput, {nullable:true})
    Expense?: ExpenseUpdateManyWithoutAccountNestedInput;
}
