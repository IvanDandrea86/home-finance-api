import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueCreateInput } from './revenue-create.input';
import { RevenueUpdateInput } from './revenue-update.input';

@ArgsType()
export class UpsertOneRevenueArgs {
  @Field(() => RevenueWhereUniqueInput, { nullable: false })
  @Type(() => RevenueWhereUniqueInput)
  where!: RevenueWhereUniqueInput;

  @Field(() => RevenueCreateInput, { nullable: false })
  @Type(() => RevenueCreateInput)
  create!: RevenueCreateInput;

  @Field(() => RevenueUpdateInput, { nullable: false })
  @Type(() => RevenueUpdateInput)
  update!: RevenueUpdateInput;
}
