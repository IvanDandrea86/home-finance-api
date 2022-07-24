import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { Type } from 'class-transformer';
import { ExpenseUpdateWithoutAccountInput } from './expense-update-without-account.input';

@InputType()
export class ExpenseUpdateWithWhereUniqueWithoutAccountInput {
  @Field(() => ExpenseWhereUniqueInput, { nullable: false })
  @Type(() => ExpenseWhereUniqueInput)
  where!: ExpenseWhereUniqueInput;

  @Field(() => ExpenseUpdateWithoutAccountInput, { nullable: false })
  @Type(() => ExpenseUpdateWithoutAccountInput)
  data!: ExpenseUpdateWithoutAccountInput;
}
