import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExpenseUncheckedCreateWithoutExpenseDetailsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  monthlyCost?: number;

  @Field(() => String, { nullable: true })
  familyId?: string;
}
