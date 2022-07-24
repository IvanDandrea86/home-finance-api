import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';
import { MandateCreateWithoutDetailInput } from './mandate-create-without-detail.input';

@InputType()
export class MandateCreateOrConnectWithoutDetailInput {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;

  @Field(() => MandateCreateWithoutDetailInput, { nullable: false })
  @Type(() => MandateCreateWithoutDetailInput)
  create!: MandateCreateWithoutDetailInput;
}
