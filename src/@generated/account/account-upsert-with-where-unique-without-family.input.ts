import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutFamilyInput } from './account-update-without-family.input';
import { AccountCreateWithoutFamilyInput } from './account-create-without-family.input';

@InputType()
export class AccountUpsertWithWhereUniqueWithoutFamilyInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: AccountWhereUniqueInput;

  @Field(() => AccountUpdateWithoutFamilyInput, { nullable: false })
  @Type(() => AccountUpdateWithoutFamilyInput)
  update!: AccountUpdateWithoutFamilyInput;

  @Field(() => AccountCreateWithoutFamilyInput, { nullable: false })
  @Type(() => AccountCreateWithoutFamilyInput)
  create!: AccountCreateWithoutFamilyInput;
}
