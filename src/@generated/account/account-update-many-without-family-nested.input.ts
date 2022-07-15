import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutFamilyInput } from './account-create-without-family.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutFamilyInput } from './account-create-or-connect-without-family.input';
import { AccountUpsertWithWhereUniqueWithoutFamilyInput } from './account-upsert-with-where-unique-without-family.input';
import { AccountCreateManyFamilyInputEnvelope } from './account-create-many-family-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithWhereUniqueWithoutFamilyInput } from './account-update-with-where-unique-without-family.input';
import { AccountUpdateManyWithWhereWithoutFamilyInput } from './account-update-many-with-where-without-family.input';
import { AccountScalarWhereInput } from './account-scalar-where.input';

@InputType()
export class AccountUpdateManyWithoutFamilyNestedInput {
  @Field(() => [AccountCreateWithoutFamilyInput], { nullable: true })
  @Type(() => AccountCreateWithoutFamilyInput)
  create?: Array<AccountCreateWithoutFamilyInput>;

  @Field(() => [AccountCreateOrConnectWithoutFamilyInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutFamilyInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutFamilyInput>;

  @Field(() => [AccountUpsertWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutFamilyInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutFamilyInput>;

  @Field(() => AccountCreateManyFamilyInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyFamilyInputEnvelope)
  createMany?: AccountCreateManyFamilyInputEnvelope;

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;

  @Field(() => [AccountUpdateWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutFamilyInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutFamilyInput>;

  @Field(() => [AccountUpdateManyWithWhereWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateManyWithWhereWithoutFamilyInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutFamilyInput>;

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>;
}
