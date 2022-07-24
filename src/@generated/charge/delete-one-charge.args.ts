import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneChargeArgs {
  @Field(() => ChargeWhereUniqueInput, { nullable: false })
  @Type(() => ChargeWhereUniqueInput)
  where!: ChargeWhereUniqueInput;
}
