import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutExpenseInput } from './detail-create-without-expense.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutExpenseInput } from './detail-create-or-connect-without-expense.input';
import { DetailUpsertWithWhereUniqueWithoutExpenseInput } from './detail-upsert-with-where-unique-without-expense.input';
import { DetailCreateManyExpenseInputEnvelope } from './detail-create-many-expense-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithWhereUniqueWithoutExpenseInput } from './detail-update-with-where-unique-without-expense.input';
import { DetailUpdateManyWithWhereWithoutExpenseInput } from './detail-update-many-with-where-without-expense.input';
import { DetailScalarWhereInput } from './detail-scalar-where.input';

@InputType()
export class DetailUpdateManyWithoutExpenseInput {
  @Field(() => [DetailCreateWithoutExpenseInput], { nullable: true })
  @Type(() => DetailCreateWithoutExpenseInput)
  create?: Array<DetailCreateWithoutExpenseInput>;

  @Field(() => [DetailCreateOrConnectWithoutExpenseInput], { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutExpenseInput)
  connectOrCreate?: Array<DetailCreateOrConnectWithoutExpenseInput>;

  @Field(() => [DetailUpsertWithWhereUniqueWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => DetailUpsertWithWhereUniqueWithoutExpenseInput)
  upsert?: Array<DetailUpsertWithWhereUniqueWithoutExpenseInput>;

  @Field(() => DetailCreateManyExpenseInputEnvelope, { nullable: true })
  @Type(() => DetailCreateManyExpenseInputEnvelope)
  createMany?: DetailCreateManyExpenseInputEnvelope;

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

  @Field(() => [DetailUpdateWithWhereUniqueWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => DetailUpdateWithWhereUniqueWithoutExpenseInput)
  update?: Array<DetailUpdateWithWhereUniqueWithoutExpenseInput>;

  @Field(() => [DetailUpdateManyWithWhereWithoutExpenseInput], {
    nullable: true,
  })
  @Type(() => DetailUpdateManyWithWhereWithoutExpenseInput)
  updateMany?: Array<DetailUpdateManyWithWhereWithoutExpenseInput>;

  @Field(() => [DetailScalarWhereInput], { nullable: true })
  @Type(() => DetailScalarWhereInput)
  deleteMany?: Array<DetailScalarWhereInput>;
}
