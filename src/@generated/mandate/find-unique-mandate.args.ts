import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMandateArgs {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;
}
