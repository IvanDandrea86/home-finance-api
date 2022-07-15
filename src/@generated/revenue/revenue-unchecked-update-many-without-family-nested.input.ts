import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateWithoutFamilyInput } from './revenue-create-without-family.input';
import { Type } from 'class-transformer';
import { RevenueCreateOrConnectWithoutFamilyInput } from './revenue-create-or-connect-without-family.input';
import { RevenueUpsertWithWhereUniqueWithoutFamilyInput } from './revenue-upsert-with-where-unique-without-family.input';
import { RevenueCreateManyFamilyInputEnvelope } from './revenue-create-many-family-input-envelope.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { RevenueUpdateWithWhereUniqueWithoutFamilyInput } from './revenue-update-with-where-unique-without-family.input';
import { RevenueUpdateManyWithWhereWithoutFamilyInput } from './revenue-update-many-with-where-without-family.input';
import { RevenueScalarWhereInput } from './revenue-scalar-where.input';

@InputType()
export class RevenueUncheckedUpdateManyWithoutFamilyNestedInput {
  @Field(() => [RevenueCreateWithoutFamilyInput], { nullable: true })
  @Type(() => RevenueCreateWithoutFamilyInput)
  create?: Array<RevenueCreateWithoutFamilyInput>;

  @Field(() => [RevenueCreateOrConnectWithoutFamilyInput], { nullable: true })
  @Type(() => RevenueCreateOrConnectWithoutFamilyInput)
  connectOrCreate?: Array<RevenueCreateOrConnectWithoutFamilyInput>;

  @Field(() => [RevenueUpsertWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => RevenueUpsertWithWhereUniqueWithoutFamilyInput)
  upsert?: Array<RevenueUpsertWithWhereUniqueWithoutFamilyInput>;

  @Field(() => RevenueCreateManyFamilyInputEnvelope, { nullable: true })
  @Type(() => RevenueCreateManyFamilyInputEnvelope)
  createMany?: RevenueCreateManyFamilyInputEnvelope;

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

  @Field(() => [RevenueUpdateWithWhereUniqueWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => RevenueUpdateWithWhereUniqueWithoutFamilyInput)
  update?: Array<RevenueUpdateWithWhereUniqueWithoutFamilyInput>;

  @Field(() => [RevenueUpdateManyWithWhereWithoutFamilyInput], {
    nullable: true,
  })
  @Type(() => RevenueUpdateManyWithWhereWithoutFamilyInput)
  updateMany?: Array<RevenueUpdateManyWithWhereWithoutFamilyInput>;

  @Field(() => [RevenueScalarWhereInput], { nullable: true })
  @Type(() => RevenueScalarWhereInput)
  deleteMany?: Array<RevenueScalarWhereInput>;
}
