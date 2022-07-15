import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutFamilyInput } from './account-create-without-family.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutFamilyInput } from './account-create-or-connect-without-family.input';
import { AccountCreateManyFamilyInputEnvelope } from './account-create-many-family-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedManyWithoutFamilyInput {
  @Field(() => [AccountCreateWithoutFamilyInput], { nullable: true })
  @Type(() => AccountCreateWithoutFamilyInput)
  create?: Array<AccountCreateWithoutFamilyInput>;

  @Field(() => [AccountCreateOrConnectWithoutFamilyInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutFamilyInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutFamilyInput>;

  @Field(() => AccountCreateManyFamilyInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyFamilyInputEnvelope)
  createMany?: AccountCreateManyFamilyInputEnvelope;

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;
}
