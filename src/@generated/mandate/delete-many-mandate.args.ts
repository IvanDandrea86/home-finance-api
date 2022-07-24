import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMandateArgs {
  @Field(() => MandateWhereInput, { nullable: true })
  @Type(() => MandateWhereInput)
  where?: MandateWhereInput;
}
