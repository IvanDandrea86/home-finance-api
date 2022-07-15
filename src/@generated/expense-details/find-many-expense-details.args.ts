import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpenseDetailsWhereInput } from './expense-details-where.input';
import { Type } from 'class-transformer';
import { ExpenseDetailsOrderByWithRelationInput } from './expense-details-order-by-with-relation.input';
import { ExpenseDetailsWhereUniqueInput } from './expense-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpenseDetailsScalarFieldEnum } from './expense-details-scalar-field.enum';

@ArgsType()
export class FindManyExpenseDetailsArgs {
  @Field(() => ExpenseDetailsWhereInput, { nullable: true })
  @Type(() => ExpenseDetailsWhereInput)
  where?: ExpenseDetailsWhereInput;

  @Field(() => [ExpenseDetailsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ExpenseDetailsOrderByWithRelationInput>;

  @Field(() => ExpenseDetailsWhereUniqueInput, { nullable: true })
  cursor?: ExpenseDetailsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ExpenseDetailsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ExpenseDetailsScalarFieldEnum>;
}
