import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutExpensesInput } from './family-create-without-expenses.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutExpensesInput } from './family-create-or-connect-without-expenses.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@InputType()
export class FamilyCreateNestedOneWithoutExpensesInput {
  @Field(() => FamilyCreateWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyCreateWithoutExpensesInput)
  create?: FamilyCreateWithoutExpensesInput;

  @Field(() => FamilyCreateOrConnectWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyCreateOrConnectWithoutExpensesInput)
  connectOrCreate?: FamilyCreateOrConnectWithoutExpensesInput;

  @Field(() => FamilyWhereUniqueInput, { nullable: true })
  @Type(() => FamilyWhereUniqueInput)
  connect?: FamilyWhereUniqueInput;
}
