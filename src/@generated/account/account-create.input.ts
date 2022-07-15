import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutAccountsInput } from '../family/family-create-nested-one-without-accounts.input';

@InputType()
export class AccountCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => AccountType, { nullable: false })
  type!: keyof typeof AccountType;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: true })
  monthlyBudget?: number;

  @Field(() => Int, { nullable: true })
  sold?: number;

  @Field(() => FamilyCreateNestedOneWithoutAccountsInput, { nullable: true })
  Family?: FamilyCreateNestedOneWithoutAccountsInput;
}