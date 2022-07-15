import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateWithoutUserInput } from './revenue-create-without-user.input';
import { Type } from 'class-transformer';
import { RevenueCreateOrConnectWithoutUserInput } from './revenue-create-or-connect-without-user.input';
import { RevenueUpsertWithWhereUniqueWithoutUserInput } from './revenue-upsert-with-where-unique-without-user.input';
import { RevenueCreateManyUserInputEnvelope } from './revenue-create-many-user-input-envelope.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { RevenueUpdateWithWhereUniqueWithoutUserInput } from './revenue-update-with-where-unique-without-user.input';
import { RevenueUpdateManyWithWhereWithoutUserInput } from './revenue-update-many-with-where-without-user.input';
import { RevenueScalarWhereInput } from './revenue-scalar-where.input';

@InputType()
export class RevenueUpdateManyWithoutUserInput {
  @Field(() => [RevenueCreateWithoutUserInput], { nullable: true })
  @Type(() => RevenueCreateWithoutUserInput)
  create?: Array<RevenueCreateWithoutUserInput>;

  @Field(() => [RevenueCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => RevenueCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<RevenueCreateOrConnectWithoutUserInput>;

  @Field(() => [RevenueUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => RevenueUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<RevenueUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => RevenueCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => RevenueCreateManyUserInputEnvelope)
  createMany?: RevenueCreateManyUserInputEnvelope;

  @Field(() => [RevenueWhereUniqueInput], { nullable: true })
  @Type(() => RevenueWhereUniqueInput)
  set?: Array<RevenueWhereUniqueInput>;

  @Field(() => [RevenueWhereUniqueInput], { nullable: true })
  @Type(() => RevenueWhereUniqueInput)
  disconnect?: Array<RevenueWhereUniqueInput>;

  @Field(() => [RevenueWhereUniqueInput], { nullable: true })
  @Type(() => RevenueWhereUniqueInput)
  delete?: Array<RevenueWhereUniqueInput>;

  @Field(() => [RevenueWhereUniqueInput], { nullable: true })
  @Type(() => RevenueWhereUniqueInput)
  connect?: Array<RevenueWhereUniqueInput>;

  @Field(() => [RevenueUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => RevenueUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<RevenueUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [RevenueUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => RevenueUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<RevenueUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [RevenueScalarWhereInput], { nullable: true })
  @Type(() => RevenueScalarWhereInput)
  deleteMany?: Array<RevenueScalarWhereInput>;
}
