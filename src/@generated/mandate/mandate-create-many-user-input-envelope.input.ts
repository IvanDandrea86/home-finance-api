import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateCreateManyUserInput } from './mandate-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MandateCreateManyUserInputEnvelope {
  @Field(() => [MandateCreateManyUserInput], { nullable: false })
  @Type(() => MandateCreateManyUserInput)
  data!: Array<MandateCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
