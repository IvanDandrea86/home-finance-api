import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateUpdateInput } from './mandate-update.input';
import { Type } from 'class-transformer';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';

@ArgsType()
export class UpdateOneMandateArgs {
  @Field(() => MandateUpdateInput, { nullable: false })
  @Type(() => MandateUpdateInput)
  data!: MandateUpdateInput;

  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;
}
