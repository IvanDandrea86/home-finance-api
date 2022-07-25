import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutFamilyInput } from '../user/user-create-nested-many-without-family.input';
import { RevenueCreateNestedManyWithoutFamilyInput } from '../revenue/revenue-create-nested-many-without-family.input';
import { AccountCreateNestedManyWithoutFamilyInput } from '../account/account-create-nested-many-without-family.input';

@InputType()
export class FamilyCreateWithoutExpensesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutFamilyInput, {nullable:true})
    members?: UserCreateNestedManyWithoutFamilyInput;

    @Field(() => RevenueCreateNestedManyWithoutFamilyInput, {nullable:true})
    revenues?: RevenueCreateNestedManyWithoutFamilyInput;

    @Field(() => AccountCreateNestedManyWithoutFamilyInput, {nullable:true})
    accounts?: AccountCreateNestedManyWithoutFamilyInput;
}
