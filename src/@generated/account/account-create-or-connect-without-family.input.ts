import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutFamilyInput } from './account-create-without-family.input';

@InputType()
export class AccountCreateOrConnectWithoutFamilyInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: AccountWhereUniqueInput;

  @Field(() => AccountCreateWithoutFamilyInput, { nullable: false })
  @Type(() => AccountCreateWithoutFamilyInput)
  create!: AccountCreateWithoutFamilyInput;
}
