import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereInput } from './revenue-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRevenueArgs {
  @Field(() => RevenueWhereInput, { nullable: true })
  @Type(() => RevenueWhereInput)
  where?: RevenueWhereInput;
}
