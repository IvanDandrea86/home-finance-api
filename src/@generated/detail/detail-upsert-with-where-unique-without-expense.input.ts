import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailUpdateWithoutExpenseInput } from './detail-update-without-expense.input';
import { DetailCreateWithoutExpenseInput } from './detail-create-without-expense.input';

@InputType()
export class DetailUpsertWithWhereUniqueWithoutExpenseInput {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;

  @Field(() => DetailUpdateWithoutExpenseInput, { nullable: false })
  @Type(() => DetailUpdateWithoutExpenseInput)
  update!: DetailUpdateWithoutExpenseInput;

  @Field(() => DetailCreateWithoutExpenseInput, { nullable: false })
  @Type(() => DetailCreateWithoutExpenseInput)
  create!: DetailCreateWithoutExpenseInput;
}
