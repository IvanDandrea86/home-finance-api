import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeCreateManyInput } from './charge-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChargeArgs {
  @Field(() => [ChargeCreateManyInput], { nullable: false })
  @Type(() => ChargeCreateManyInput)
  data!: Array<ChargeCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
