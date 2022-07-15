import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsCreateManyInput } from './expense-details-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExpenseDetailsArgs {
  @Field(() => [ExpenseDetailsCreateManyInput], { nullable: false })
  @Type(() => ExpenseDetailsCreateManyInput)
  data!: Array<ExpenseDetailsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
