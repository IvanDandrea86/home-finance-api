import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Type } from 'class-transformer';
import { ChargeCreateInput } from './charge-create.input';
import { ChargeUpdateInput } from './charge-update.input';

@ArgsType()
export class UpsertOneChargeArgs {
  @Field(() => ChargeWhereUniqueInput, { nullable: false })
  @Type(() => ChargeWhereUniqueInput)
  where!: ChargeWhereUniqueInput;

  @Field(() => ChargeCreateInput, { nullable: false })
  @Type(() => ChargeCreateInput)
  create!: ChargeCreateInput;

  @Field(() => ChargeUpdateInput, { nullable: false })
  @Type(() => ChargeUpdateInput)
  update!: ChargeUpdateInput;
}
