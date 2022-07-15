import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRevenueInput } from '../user/user-update-one-required-without-revenue.input';
import { FamilyUpdateOneRequiredWithoutRevenuesInput } from '../family/family-update-one-required-without-revenues.input';

@InputType()
export class RevenueUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutRevenueInput, { nullable: true })
  User?: UserUpdateOneRequiredWithoutRevenueInput;

  @Field(() => FamilyUpdateOneRequiredWithoutRevenuesInput, { nullable: true })
  Family?: FamilyUpdateOneRequiredWithoutRevenuesInput;
}
