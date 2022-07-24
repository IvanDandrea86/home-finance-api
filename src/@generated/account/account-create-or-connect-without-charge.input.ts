import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChargeInput } from './account-create-without-charge.input';

@InputType()
export class AccountCreateOrConnectWithoutChargeInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: AccountWhereUniqueInput;

  @Field(() => AccountCreateWithoutChargeInput, { nullable: false })
  @Type(() => AccountCreateWithoutChargeInput)
  create!: AccountCreateWithoutChargeInput;
}
