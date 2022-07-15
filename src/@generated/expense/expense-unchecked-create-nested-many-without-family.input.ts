import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateWithoutFamilyInput } from './expense-create-without-family.input';
import { Type } from 'class-transformer';
import { ExpenseCreateOrConnectWithoutFamilyInput } from './expense-create-or-connect-without-family.input';
import { ExpenseCreateManyFamilyInputEnvelope } from './expense-create-many-family-input-envelope.input';
import { ExpenseWhereUniqueInput } from './expense-where-unique.input';

@InputType()
export class ExpenseUncheckedCreateNestedManyWithoutFamilyInput {
  @Field(() => [ExpenseCreateWithoutFamilyInput], { nullable: true })
  @Type(() => ExpenseCreateWithoutFamilyInput)
  create?: Array<ExpenseCreateWithoutFamilyInput>;

  @Field(() => [ExpenseCreateOrConnectWithoutFamilyInput], { nullable: true })
  @Type(() => ExpenseCreateOrConnectWithoutFamilyInput)
  connectOrCreate?: Array<ExpenseCreateOrConnectWithoutFamilyInput>;

  @Field(() => ExpenseCreateManyFamilyInputEnvelope, { nullable: true })
  @Type(() => ExpenseCreateManyFamilyInputEnvelope)
  createMany?: ExpenseCreateManyFamilyInputEnvelope;

  @Field(() => [ExpenseWhereUniqueInput], { nullable: true })
  @Type(() => ExpenseWhereUniqueInput)
  connect?: Array<ExpenseWhereUniqueInput>;
}
