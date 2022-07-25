import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DetailUncheckedUpdateManyWithoutExpenseNestedInput } from '../detail/detail-unchecked-update-many-without-expense-nested.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ExpenseUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DetailUncheckedUpdateManyWithoutExpenseNestedInput, {nullable:true})
    expenseDetails?: DetailUncheckedUpdateManyWithoutExpenseNestedInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    monthlyCost?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    familyId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    accountId?: NullableStringFieldUpdateOperationsInput;
}
