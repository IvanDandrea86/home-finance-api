import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ExpenseCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Float, { nullable: true })
  monthlyCost?: number;

  @Field(() => String, { nullable: true })
  familyId?: string;

  @Field(() => String, { nullable: true })
  accountId?: string;
}
