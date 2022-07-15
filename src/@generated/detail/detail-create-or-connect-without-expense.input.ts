import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailCreateWithoutExpenseInput } from './detail-create-without-expense.input';

@InputType()
export class DetailCreateOrConnectWithoutExpenseInput {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;

  @Field(() => DetailCreateWithoutExpenseInput, { nullable: false })
  @Type(() => DetailCreateWithoutExpenseInput)
  create!: DetailCreateWithoutExpenseInput;
}
