import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeCreateInput } from './charge-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChargeArgs {
  @Field(() => ChargeCreateInput, { nullable: false })
  @Type(() => ChargeCreateInput)
  data!: ChargeCreateInput;
}
