import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueCreateManyInput } from './revenue-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRevenueArgs {
  @Field(() => [RevenueCreateManyInput], { nullable: false })
  @Type(() => RevenueCreateManyInput)
  data!: Array<RevenueCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
