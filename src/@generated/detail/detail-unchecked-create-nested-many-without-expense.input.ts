import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutExpenseInput } from './detail-create-without-expense.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutExpenseInput } from './detail-create-or-connect-without-expense.input';
import { DetailCreateManyExpenseInputEnvelope } from './detail-create-many-expense-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailUncheckedCreateNestedManyWithoutExpenseInput {
  @Field(() => [DetailCreateWithoutExpenseInput], { nullable: true })
  @Type(() => DetailCreateWithoutExpenseInput)
  create?: Array<DetailCreateWithoutExpenseInput>;

  @Field(() => [DetailCreateOrConnectWithoutExpenseInput], { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutExpenseInput)
  connectOrCreate?: Array<DetailCreateOrConnectWithoutExpenseInput>;

  @Field(() => DetailCreateManyExpenseInputEnvelope, { nullable: true })
  @Type(() => DetailCreateManyExpenseInputEnvelope)
  createMany?: DetailCreateManyExpenseInputEnvelope;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: Array<DetailWhereUniqueInput>;
}
