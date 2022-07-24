import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateUpdateWithoutDetailInput } from './mandate-update-without-detail.input';
import { Type } from 'class-transformer';
import { MandateCreateWithoutDetailInput } from './mandate-create-without-detail.input';

@InputType()
export class MandateUpsertWithoutDetailInput {
  @Field(() => MandateUpdateWithoutDetailInput, { nullable: false })
  @Type(() => MandateUpdateWithoutDetailInput)
  update!: MandateUpdateWithoutDetailInput;

  @Field(() => MandateCreateWithoutDetailInput, { nullable: false })
  @Type(() => MandateCreateWithoutDetailInput)
  create!: MandateCreateWithoutDetailInput;
}
