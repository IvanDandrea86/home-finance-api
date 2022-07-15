import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseCreateWithoutFamilyInput } from './expense-create-without-family.input';

@InputType()
export class ExpenseCreateOrConnectWithoutFamilyInput {
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseWhereUniqueInput)
  where!: ExpenseWhereUniqueInput;

  @Field(() => ExpenseCreateWithoutFamilyInput, { nullable: false })
  @Type(() => ExpenseCreateWithoutFamilyInput)
  create!: ExpenseCreateWithoutFamilyInput;
}
