import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFamilyInput } from './expense-create-without-family.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFamilyInput } from './expense-create-or-connect-without-family.input';
import { ExpenseUpsertWithWhereUniqueWithoutFamilyInput } from './expense-upsert-with-where-unique-without-family.input';
import { ExpenseCreateManyFamilyInputEnvelope } from './expense-create-many-family-input-envelope.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';
import { ExpenseUpdateWithWhereUniqueWithoutFamilyInput } from './expense-update-with-where-unique-without-family.input';
import { ExpenseUpdateManyWithWhereWithoutFamilyInput } from './expense-update-many-with-where-without-family.input';
import { ExpenseScalarWhereInput } from './expense-scalar-where.input';

@InputType()
export class ExpenseUncheckedUpdateManyWithoutFamilyNestedInput {
  @Field(() => [ExpenseCreateWithoutFamilyInput], { nullable: true })
  @Type(() => ExpenseCreateWithoutFamilyInput)
  create?: Array<ExpenseCreateWithoutFamilyInput>;

  @Field(() => [ExpenseCreateOrConnectWithoutFamilyInput], { nullable: true })
  @Type(() => ExpenseCreateOrConnectWithoutFamilyInput)
  connectOrCreate?: Array<ExpenseCreateOrConnectWithoutFamilyInput>;

  @Field(() => [ExpenseUpsertWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpsertWithWhereUniqueWithoutFamilyInput)
  upsert?: Array<ExpenseUpsertWithWhereUniqueWithoutFamilyInput>;

  @Field(() => ExpenseCreateManyFamilyInputEnvelope, { nullable: true })
  @Type(() => ExpenseCreateManyFamilyInputEnvelope)
  createMany?: ExpenseCreateManyFamilyInputEnvelope;

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

  @Field(() => [ExpenseUpdateWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpdateWithWhereUniqueWithoutFamilyInput)
  update?: Array<ExpenseUpdateWithWhereUniqueWithoutFamilyInput>;

  @Field(() => [ExpenseUpdateManyWithWhereWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => ExpenseUpdateManyWithWhereWithoutFamilyInput)
  updateMany?: Array<ExpenseUpdateManyWithWhereWithoutFamilyInput>;

  @Field(() => [ExpenseScalarWhereInput], { nullable: true })
  @Type(() => ExpenseScalarWhereInput)
  deleteMany?: Array<ExpenseScalarWhereInput>;
}
