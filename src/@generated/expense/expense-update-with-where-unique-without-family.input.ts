import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutFamilyInput } from './expense-update-without-family.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutFamilyInput {
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseWhereUniqueInput)
  where!: ExpenseWhereUniqueInput;

  @Field(() => ExpenseUpdateWithoutFamilyInput, { nullable: false })
  @Type(() => ExpenseUpdateWithoutFamilyInput)
  data!: ExpenseUpdateWithoutFamilyInput;
}
