import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutExpensesInput } from './family-create-without-expenses.input';

@InputType()
export class FamilyCreateOrConnectWithoutExpensesInput {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: FamilyWhereUniqueInput;

    @Field(() => FamilyCreateWithoutExpensesInput, {nullable:false})
    @Type(() => FamilyCreateWithoutExpensesInput)
    create!: FamilyCreateWithoutExpensesInput;
}
