import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyFamilyInput } from './expense-create-many-family.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyFamilyInputEnvelope {
  @Field(() => [ExpenseCreateManyFamilyInput], { nullable: false })
  @Type(() => ExpenseCreateManyFamilyInput)
  data!: Array<ExpenseCreateManyFamilyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
