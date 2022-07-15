import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueUpdateManyMutationInput } from './revenue-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RevenueWhereInput } from './revenue-where.input';

@ArgsType()
export class UpdateManyRevenueArgs {
  @Field(() => RevenueUpdateManyMutationInput, { nullable: false })
  @Type(() => RevenueUpdateManyMutationInput)
  data!: RevenueUpdateManyMutationInput;

  @Field(() => RevenueWhereInput, { nullable: true })
  @Type(() => RevenueWhereInput)
  where?: RevenueWhereInput;
}
