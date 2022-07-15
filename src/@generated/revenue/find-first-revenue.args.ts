import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereInput } from './revenue-where.input';
import { Type } from 'class-transformer';
import { RevenueOrderByWithRelationInput } from './revenue-order-by-with-relation.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RevenueScalarFieldEnum } from './revenue-scalar-field.enum';

@ArgsType()
export class FindFirstRevenueArgs {
  @Field(() => RevenueWhereInput, { nullable: true })
  @Type(() => RevenueWhereInput)
  where?: RevenueWhereInput;

  @Field(() => [RevenueOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RevenueOrderByWithRelationInput>;

  @Field(() => RevenueWhereUniqueInput, { nullable: true })
  cursor?: RevenueWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [RevenueScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RevenueScalarFieldEnum>;
}
