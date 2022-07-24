import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeUpdateManyMutationInput } from './charge-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChargeWhereInput } from './charge-where.input';

@ArgsType()
export class UpdateManyChargeArgs {
  @Field(() => ChargeUpdateManyMutationInput, { nullable: false })
  @Type(() => ChargeUpdateManyMutationInput)
  data!: ChargeUpdateManyMutationInput;

  @Field(() => ChargeWhereInput, { nullable: true })
  @Type(() => ChargeWhereInput)
  where?: ChargeWhereInput;
}
