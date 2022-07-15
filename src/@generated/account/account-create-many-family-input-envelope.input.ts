import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateManyFamilyInput } from './account-create-many-family.input';
import { Type } from 'class-transformer';

@InputType()
export class AccountCreateManyFamilyInputEnvelope {
  @Field(() => [AccountCreateManyFamilyInput], { nullable: false })
  @Type(() => AccountCreateManyFamilyInput)
  data!: Array<AccountCreateManyFamilyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
