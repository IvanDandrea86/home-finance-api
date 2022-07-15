import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutExpensesInput } from './family-create-without-expenses.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutExpensesInput } from './family-create-or-connect-without-expenses.input';
import { FamilyUpsertWithoutExpensesInput } from './family-upsert-without-expenses.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateWithoutExpensesInput } from './family-update-without-expenses.input';

@InputType()
export class FamilyUpdateOneWithoutExpensesInput {
  @Field(() => FamilyCreateWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyCreateWithoutExpensesInput)
  create?: FamilyCreateWithoutExpensesInput;

  @Field(() => FamilyCreateOrConnectWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyCreateOrConnectWithoutExpensesInput)
  connectOrCreate?: FamilyCreateOrConnectWithoutExpensesInput;

  @Field(() => FamilyUpsertWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyUpsertWithoutExpensesInput)
  upsert?: FamilyUpsertWithoutExpensesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => FamilyWhereUniqueInput, { nullable: true })
  @Type(() => FamilyWhereUniqueInput)
  connect?: FamilyWhereUniqueInput;

  @Field(() => FamilyUpdateWithoutExpensesInput, { nullable: true })
  @Type(() => FamilyUpdateWithoutExpensesInput)
  update?: FamilyUpdateWithoutExpensesInput;
}
