import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueUpdateInput } from './revenue-update.input';
import { Type } from 'class-transformer';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';

@ArgsType()
export class UpdateOneRevenueArgs {
  @Field(() => RevenueUpdateInput, { nullable: false })
  @Type(() => RevenueUpdateInput)
  data!: RevenueUpdateInput;

  @Field(() => RevenueWhereUniqueInput, { nullable: false })
  @Type(() => RevenueWhereUniqueInput)
  where!: RevenueWhereUniqueInput;
}
