import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutAccountInput } from './expense-update-without-account.input';
import { ExpenseCreateWithoutAccountInput } from './expense-create-without-account.input';

@InputType()
export class ExpenseUpsertWithWhereUniqueWithoutAccountInput {
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseWhereUniqueInput)
  where!: ExpenseWhereUniqueInput;

  @Field(() => ExpenseUpdateWithoutAccountInput, { nullable: false })
  @Type(() => ExpenseUpdateWithoutAccountInput)
  update!: ExpenseUpdateWithoutAccountInput;

  @Field(() => ExpenseCreateWithoutAccountInput, { nullable: false })
  @Type(() => ExpenseCreateWithoutAccountInput)
  create!: ExpenseCreateWithoutAccountInput;
}
