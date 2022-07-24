import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChargeInput } from './account-create-without-charge.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChargeInput } from './account-create-or-connect-without-charge.input';
import { AccountUpsertWithoutChargeInput } from './account-upsert-without-charge.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithoutChargeInput } from './account-update-without-charge.input';

@InputType()
export class AccountUpdateOneWithoutChargeNestedInput {
  @Field(() => AccountCreateWithoutChargeInput, { nullable: true })
  @Type(() => AccountCreateWithoutChargeInput)
  create?: AccountCreateWithoutChargeInput;

  @Field(() => AccountCreateOrConnectWithoutChargeInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutChargeInput)
  connectOrCreate?: AccountCreateOrConnectWithoutChargeInput;

  @Field(() => AccountUpsertWithoutChargeInput, { nullable: true })
  @Type(() => AccountUpsertWithoutChargeInput)
  upsert?: AccountUpsertWithoutChargeInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: AccountWhereUniqueInput;

  @Field(() => AccountUpdateWithoutChargeInput, { nullable: true })
  @Type(() => AccountUpdateWithoutChargeInput)
  update?: AccountUpdateWithoutChargeInput;
}
