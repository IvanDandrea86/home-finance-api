import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateCreateWithoutUserInput } from './mandate-create-without-user.input';
import { Type } from 'class-transformer';
import { MandateCreateOrConnectWithoutUserInput } from './mandate-create-or-connect-without-user.input';
import { MandateUpsertWithWhereUniqueWithoutUserInput } from './mandate-upsert-with-where-unique-without-user.input';
import { MandateCreateManyUserInputEnvelope } from './mandate-create-many-user-input-envelope.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { MandateUpdateWithWhereUniqueWithoutUserInput } from './mandate-update-with-where-unique-without-user.input';
import { MandateUpdateManyWithWhereWithoutUserInput } from './mandate-update-many-with-where-without-user.input';
import { MandateScalarWhereInput } from './mandate-scalar-where.input';

@InputType()
export class MandateUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [MandateCreateWithoutUserInput], { nullable: true })
  @Type(() => MandateCreateWithoutUserInput)
  create?: Array<MandateCreateWithoutUserInput>;

  @Field(() => [MandateCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => MandateCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<MandateCreateOrConnectWithoutUserInput>;

  @Field(() => [MandateUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => MandateUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<MandateUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => MandateCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => MandateCreateManyUserInputEnvelope)
  createMany?: MandateCreateManyUserInputEnvelope;

  @Field(() => [MandateWhereUniqueInput], { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  set?: Array<MandateWhereUniqueInput>;

  @Field(() => [MandateWhereUniqueInput], { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  disconnect?: Array<MandateWhereUniqueInput>;

  @Field(() => [MandateWhereUniqueInput], { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  delete?: Array<MandateWhereUniqueInput>;

  @Field(() => [MandateWhereUniqueInput], { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  connect?: Array<MandateWhereUniqueInput>;

  @Field(() => [MandateUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => MandateUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<MandateUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [MandateUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => MandateUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<MandateUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [MandateScalarWhereInput], { nullable: true })
  @Type(() => MandateScalarWhereInput)
  deleteMany?: Array<MandateScalarWhereInput>;
}
