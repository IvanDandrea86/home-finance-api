import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseDetailsCreateWithoutExpenseInput } from './expense-details-create-without-expense.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsCreateOrConnectWithoutExpenseInput } from './expense-details-create-or-connect-without-expense.input';
import { ExpenseDetailsUpsertWithWhereUniqueWithoutExpenseInput } from './expense-details-upsert-with-where-unique-without-expense.input';
import { ExpenseDetailsCreateManyExpenseInputEnvelope } from './expense-details-create-many-expense-input-envelope.input';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { ExpenseDetailsUpdateWithWhereUniqueWithoutExpenseInput } from './expense-details-update-with-where-unique-without-expense.input';
import { ExpenseDetailsUpdateManyWithWhereWithoutExpenseInput } from './expense-details-update-many-with-where-without-expense.input';
import { ExpenseDetailsScalarWhereInput } from './expense-details-scalar-where.input';

@InputType()
export class ExpenseDetailsUncheckedUpdateManyWithoutExpenseInput {
  @Field(() => [ExpenseDetailsCreateWithoutExpenseInput], { nullable: true })
  @Type(() => ExpenseDetailsCreateWithoutExpenseInput)
  create?: Array<ExpenseDetailsCreateWithoutExpenseInput>;

  @Field(() => [ExpenseDetailsCreateOrConnectWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => ExpenseDetailsCreateOrConnectWithoutExpenseInput)
  connectOrCreate?: Array<ExpenseDetailsCreateOrConnectWithoutExpenseInput>;

  @Field(() => [ExpenseDetailsUpsertWithWhereUniqueWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => ExpenseDetailsUpsertWithWhereUniqueWithoutExpenseInput)
  upsert?: Array<ExpenseDetailsUpsertWithWhereUniqueWithoutExpenseInput>;

  @Field(() => ExpenseDetailsCreateManyExpenseInputEnvelope, { nullable: true })
  @Type(() => ExpenseDetailsCreateManyExpenseInputEnvelope)
  createMany?: ExpenseDetailsCreateManyExpenseInputEnvelope;

  @Field(() => [ExpenseDetailsWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  set?: Array<ExpenseDetailsWhereUniqueInput>;

  @Field(() => [ExpenseDetailsWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  disconnect?: Array<ExpenseDetailsWhereUniqueInput>;

  @Field(() => [ExpenseDetailsWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  delete?: Array<ExpenseDetailsWhereUniqueInput>;

  @Field(() => [ExpenseDetailsWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseDetailsWhereUniqueInput)
  connect?: Array<ExpenseDetailsWhereUniqueInput>;

  @Field(() => [ExpenseDetailsUpdateWithWhereUniqueWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => ExpenseDetailsUpdateWithWhereUniqueWithoutExpenseInput)
  update?: Array<ExpenseDetailsUpdateWithWhereUniqueWithoutExpenseInput>;

  @Field(() => [ExpenseDetailsUpdateManyWithWhereWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => ExpenseDetailsUpdateManyWithWhereWithoutExpenseInput)
  updateMany?: Array<ExpenseDetailsUpdateManyWithWhereWithoutExpenseInput>;

  @Field(() => [ExpenseDetailsScalarWhereInput], { nullable: true })
  @Type(() => ExpenseDetailsScalarWhereInput)
  deleteMany?: Array<ExpenseDetailsScalarWhereInput>;
}
