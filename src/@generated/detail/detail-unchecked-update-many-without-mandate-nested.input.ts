import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutMandateInput } from './detail-create-or-connect-without-mandate.input';
import { DetailUpsertWithWhereUniqueWithoutMandateInput } from './detail-upsert-with-where-unique-without-mandate.input';
import { DetailCreateManyMandateInputEnvelope } from './detail-create-many-mandate-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithWhereUniqueWithoutMandateInput } from './detail-update-with-where-unique-without-mandate.input';
import { DetailUpdateManyWithWhereWithoutMandateInput } from './detail-update-many-with-where-without-mandate.input';
import { DetailScalarWhereInput } from './detail-scalar-where.input';

@InputType()
export class DetailUncheckedUpdateManyWithoutMandateNestedInput {
  @Field(() => [DetailCreateWithoutMandateInput], { nullable: true })
  @Type(() => DetailCreateWithoutMandateInput)
  create?: Array<DetailCreateWithoutMandateInput>;

  @Field(() => [DetailCreateOrConnectWithoutMandateInput], { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutMandateInput)
  connectOrCreate?: Array<DetailCreateOrConnectWithoutMandateInput>;

  @Field(() => [DetailUpsertWithWhereUniqueWithoutMandateInput], {
    nullable: true,
  })
  @Type(() => DetailUpsertWithWhereUniqueWithoutMandateInput)
  upsert?: Array<DetailUpsertWithWhereUniqueWithoutMandateInput>;

  @Field(() => DetailCreateManyMandateInputEnvelope, { nullable: true })
  @Type(() => DetailCreateManyMandateInputEnvelope)
  createMany?: DetailCreateManyMandateInputEnvelope;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  set?: Array<DetailWhereUniqueInput>;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  disconnect?: Array<DetailWhereUniqueInput>;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  delete?: Array<DetailWhereUniqueInput>;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: Array<DetailWhereUniqueInput>;

  @Field(() => [DetailUpdateWithWhereUniqueWithoutMandateInput], {
    nullable: true,
  })
  @Type(() => DetailUpdateWithWhereUniqueWithoutMandateInput)
  update?: Array<DetailUpdateWithWhereUniqueWithoutMandateInput>;

  @Field(() => [DetailUpdateManyWithWhereWithoutMandateInput], {
    nullable: true,
  })
  @Type(() => DetailUpdateManyWithWhereWithoutMandateInput)
  updateMany?: Array<DetailUpdateManyWithWhereWithoutMandateInput>;

  @Field(() => [DetailScalarWhereInput], { nullable: true })
  @Type(() => DetailScalarWhereInput)
  deleteMany?: Array<DetailScalarWhereInput>;
}
