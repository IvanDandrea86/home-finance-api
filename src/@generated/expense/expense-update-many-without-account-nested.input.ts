import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutAccountInput } from './expense-create-without-account.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutAccountInput } from './expense-create-or-connect-without-account.input';
import { ExpenseUpsertWithWhereUniqueWithoutAccountInput } from './expense-upsert-with-where-unique-without-account.input';
import { ExpenseCreateManyAccountInputEnvelope } from './expense-create-many-account-input-envelope.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutAccountInput } from './expense-update-with-where-unique-without-account.input';
import { ExpenseUpdateManyWithWhereWithoutAccountInput } from './expense-update-many-with-where-without-account.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUpdateManyWithoutAccountNestedInput {
  @Field(() => [ExpenseCreateWithoutAccountInput], { nullable: true })
  @Type(() => ExpenseCreateWithoutAccountInput)
  create?: Array<ExpenseCreateWithoutAccountInput>;

  @Field(() => [ExpenseCreateOrConnectWithoutAccountInput], { nullable: true })
  @Type(() => ExpenseCreateOrConnectWithoutAccountInput)
  connectOrCreate?: Array<ExpenseCreateOrConnectWithoutAccountInput>;

  @Field(() => [ExpenseUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpsertWithWhereUniqueWithoutAccountInput)
  upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutAccountInput>;

  @Field(() => ExpenseCreateManyAccountInputEnvelope, { nullable: true })
  @Type(() => ExpenseCreateManyAccountInputEnvelope)
  createMany?: ExpenseCreateManyAccountInputEnvelope;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  set?: Array<ExpenseWhereUniqueInput>;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  disconnect?: Array<ExpenseWhereUniqueInput>;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  delete?: Array<ExpenseWhereUniqueInput>;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  connect?: Array<ExpenseWhereUniqueInput>;

  @Field(() => [ExpenseUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpdateWithWhereUniqueWithoutAccountInput)
  update?: Array<ExpenseUpdateWithWhereUniqueWithoutAccountInput>;

  @Field(() => [ExpenseUpdateManyWithWhereWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpdateManyWithWhereWithoutAccountInput)
  updateMany?: Array<ExpenseUpdateManyWithWhereWithoutAccountInput>;

  @Field(() => [ExpenseScalarWhereInput], { nullable: true })
  @Type(() => ExpenseScalarWhereInput)
  deleteMany?: Array<ExpenseScalarWhereInput>;
}
