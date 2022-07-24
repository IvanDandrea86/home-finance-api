import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeCreateWithoutAccountInput } from './charge-create-without-account.input';
import { Type } from 'class-transformer';
import { ChargeCreateOrConnectWithoutAccountInput } from './charge-create-or-connect-without-account.input';
import { ChargeUpsertWithWhereUniqueWithoutAccountInput } from './charge-upsert-with-where-unique-without-account.input';
import { ChargeCreateManyAccountInputEnvelope } from './charge-create-many-account-input-envelope.input';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { ChargeUpdateWithWhereUniqueWithoutAccountInput } from './charge-update-with-where-unique-without-account.input';
import { ChargeUpdateManyWithWhereWithoutAccountInput } from './charge-update-many-with-where-without-account.input';
import { ChargeScalarWhereInput } from './charge-scalar-where.input';

@InputType()
export class ChargeUpdateManyWithoutAccountNestedInput {
  @Field(() => [ChargeCreateWithoutAccountInput], { nullable: true })
  @Type(() => ChargeCreateWithoutAccountInput)
  create?: Array<ChargeCreateWithoutAccountInput>;

  @Field(() => [ChargeCreateOrConnectWithoutAccountInput], { nullable: true })
  @Type(() => ChargeCreateOrConnectWithoutAccountInput)
  connectOrCreate?: Array<ChargeCreateOrConnectWithoutAccountInput>;

  @Field(() => [ChargeUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ChargeUpsertWithWhereUniqueWithoutAccountInput)
  upsert?: Array<ChargeUpsertWithWhereUniqueWithoutAccountInput>;

  @Field(() => ChargeCreateManyAccountInputEnvelope, { nullable: true })
  @Type(() => ChargeCreateManyAccountInputEnvelope)
  createMany?: ChargeCreateManyAccountInputEnvelope;

  @Field(() => [ChargeWhereUniqueInput], { nullable: true })
  @Type(() => ChargeWhereUniqueInput)
  set?: Array<ChargeWhereUniqueInput>;

  @Field(() => [ChargeWhereUniqueInput], { nullable: true })
  @Type(() => ChargeWhereUniqueInput)
  disconnect?: Array<ChargeWhereUniqueInput>;

  @Field(() => [ChargeWhereUniqueInput], { nullable: true })
  @Type(() => ChargeWhereUniqueInput)
  delete?: Array<ChargeWhereUniqueInput>;

  @Field(() => [ChargeWhereUniqueInput], { nullable: true })
  @Type(() => ChargeWhereUniqueInput)
  connect?: Array<ChargeWhereUniqueInput>;

  @Field(() => [ChargeUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ChargeUpdateWithWhereUniqueWithoutAccountInput)
  update?: Array<ChargeUpdateWithWhereUniqueWithoutAccountInput>;

  @Field(() => [ChargeUpdateManyWithWhereWithoutAccountInput], {
    nullable: true,
  })
  @Type(() => ChargeUpdateManyWithWhereWithoutAccountInput)
  updateMany?: Array<ChargeUpdateManyWithWhereWithoutAccountInput>;

  @Field(() => [ChargeScalarWhereInput], { nullable: true })
  @Type(() => ChargeScalarWhereInput)
  deleteMany?: Array<ChargeScalarWhereInput>;
}
