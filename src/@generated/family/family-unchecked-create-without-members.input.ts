import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseUncheckedCreateNestedManyWithoutFamilyInput } from '../expense/expense-unchecked-create-nested-many-without-family.input';
import { RevenueUncheckedCreateNestedManyWithoutFamilyInput } from '../revenue/revenue-unchecked-create-nested-many-without-family.input';

@InputType()
export class FamilyUncheckedCreateWithoutMembersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ExpenseUncheckedCreateNestedManyWithoutFamilyInput, {
    nullable: true,
  })
  expenses?: ExpenseUncheckedCreateNestedManyWithoutFamilyInput;

  @Field(() => RevenueUncheckedCreateNestedManyWithoutFamilyInput, {
    nullable: true,
  })
  revenues?: RevenueUncheckedCreateNestedManyWithoutFamilyInput;
}
