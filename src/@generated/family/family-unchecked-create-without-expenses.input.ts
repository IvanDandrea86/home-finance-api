import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFamilyInput } from '../user/user-unchecked-create-nested-many-without-family.input';
import { RevenueUncheckedCreateNestedManyWithoutFamilyInput } from '../revenue/revenue-unchecked-create-nested-many-without-family.input';
import { AccountUncheckedCreateNestedManyWithoutFamilyInput } from '../account/account-unchecked-create-nested-many-without-family.input';

@InputType()
export class FamilyUncheckedCreateWithoutExpensesInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserUncheckedCreateNestedManyWithoutFamilyInput, {
    nullable: true,
  })
  members?: UserUncheckedCreateNestedManyWithoutFamilyInput;

  @Field(() => RevenueUncheckedCreateNestedManyWithoutFamilyInput, {
    nullable: true,
  })
  revenues?: RevenueUncheckedCreateNestedManyWithoutFamilyInput;

  @Field(() => AccountUncheckedCreateNestedManyWithoutFamilyInput, {
    nullable: true,
  })
  accounts?: AccountUncheckedCreateNestedManyWithoutFamilyInput;
}
