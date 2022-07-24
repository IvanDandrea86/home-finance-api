import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutAccountInput } from './expense-create-without-account.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutAccountInput } from './expense-create-or-connect-without-account.input';
import { ExpenseCreateManyAccountInputEnvelope } from './expense-create-many-account-input-envelope.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseUncheckedCreateNestedManyWithoutAccountInput {
  @Field(() => [ExpenseCreateWithoutAccountInput], { nullable: true })
  @Type(() => ExpenseCreateWithoutAccountInput)
  create?: Array<ExpenseCreateWithoutAccountInput>;

  @Field(() => [ExpenseCreateOrConnectWithoutAccountInput], { nullable: true })
  @Type(() => ExpenseCreateOrConnectWithoutAccountInput)
  connectOrCreate?: Array<ExpenseCreateOrConnectWithoutAccountInput>;

  @Field(() => ExpenseCreateManyAccountInputEnvelope, { nullable: true })
  @Type(() => ExpenseCreateManyAccountInputEnvelope)
  createMany?: ExpenseCreateManyAccountInputEnvelope;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  connect?: Array<ExpenseWhereUniqueInput>;
}
