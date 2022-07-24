import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMandateInput } from '../user/user-create-nested-one-without-mandate.input';

@InputType()
export class DetailCreateWithoutExpenseInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Float, { nullable: true })
  cost?: number;

  @Field(() => Int, { nullable: true })
  period?: number;

  @Field(() => UserCreateNestedOneWithoutMandateInput, { nullable: true })
  user?: UserCreateNestedOneWithoutMandateInput;
}
