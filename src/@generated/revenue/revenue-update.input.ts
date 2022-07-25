import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRevenueNestedInput } from '../user/user-update-one-required-without-revenue-nested.input';
import { FamilyUpdateOneRequiredWithoutRevenuesNestedInput } from '../family/family-update-one-required-without-revenues-nested.input';

@InputType()
export class RevenueUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRevenueNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutRevenueNestedInput;

    @Field(() => FamilyUpdateOneRequiredWithoutRevenuesNestedInput, {nullable:true})
    Family?: FamilyUpdateOneRequiredWithoutRevenuesNestedInput;
}
