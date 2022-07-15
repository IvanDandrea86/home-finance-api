import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateNestedManyWithoutFamilyInput } from '../expense/expense-create-nested-many-without-family.input';
import { RevenueCreateNestedManyWithoutFamilyInput } from '../revenue/revenue-create-nested-many-without-family.input';

@InputType()
export class FamilyCreateWithoutMembersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ExpenseCreateNestedManyWithoutFamilyInput, { nullable: true })
  expenses?: ExpenseCreateNestedManyWithoutFamilyInput;

  @Field(() => RevenueCreateNestedManyWithoutFamilyInput, { nullable: true })
  revenues?: RevenueCreateNestedManyWithoutFamilyInput;
}
