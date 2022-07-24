import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateCreateInput } from './mandate-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMandateArgs {
  @Field(() => MandateCreateInput, { nullable: false })
  @Type(() => MandateCreateInput)
  data!: MandateCreateInput;
}
