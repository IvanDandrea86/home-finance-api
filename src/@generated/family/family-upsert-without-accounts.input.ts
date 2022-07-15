import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyUpdateWithoutAccountsInput } from './family-update-without-accounts.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutAccountsInput } from './family-create-without-accounts.input';

@InputType()
export class FamilyUpsertWithoutAccountsInput {
  @Field(() => FamilyUpdateWithoutAccountsInput, { nullable: false })
  @Type(() => FamilyUpdateWithoutAccountsInput)
  update!: FamilyUpdateWithoutAccountsInput;

  @Field(() => FamilyCreateWithoutAccountsInput, { nullable: false })
  @Type(() => FamilyCreateWithoutAccountsInput)
  create!: FamilyCreateWithoutAccountsInput;
}
