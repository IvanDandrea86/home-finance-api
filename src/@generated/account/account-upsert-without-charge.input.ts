import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutChargeInput } from './account-update-without-charge.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutChargeInput } from './account-create-without-charge.input';

@InputType()
export class AccountUpsertWithoutChargeInput {
  @Field(() => AccountUpdateWithoutChargeInput, { nullable: false })
  @Type(() => AccountUpdateWithoutChargeInput)
  update!: AccountUpdateWithoutChargeInput;

  @Field(() => AccountCreateWithoutChargeInput, { nullable: false })
  @Type(() => AccountCreateWithoutChargeInput)
  create!: AccountCreateWithoutChargeInput;
}
