import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyUpdateWithoutExpensesInput } from './family-update-without-expenses.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutExpensesInput } from './family-create-without-expenses.input';

@InputType()
export class FamilyUpsertWithoutExpensesInput {
  @Field(() => FamilyUpdateWithoutExpensesInput, { nullable: false })
  @Type(() => FamilyUpdateWithoutExpensesInput)
  update!: FamilyUpdateWithoutExpensesInput;

  @Field(() => FamilyCreateWithoutExpensesInput, { nullable: false })
  @Type(() => FamilyCreateWithoutExpensesInput)
  create!: FamilyCreateWithoutExpensesInput;
}
