import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';
import { MandateUpdateWithoutUserInput } from './mandate-update-without-user.input';
import { MandateCreateWithoutUserInput } from './mandate-create-without-user.input';

@InputType()
export class MandateUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;

  @Field(() => MandateUpdateWithoutUserInput, { nullable: false })
  @Type(() => MandateUpdateWithoutUserInput)
  update!: MandateUpdateWithoutUserInput;

  @Field(() => MandateCreateWithoutUserInput, { nullable: false })
  @Type(() => MandateCreateWithoutUserInput)
  create!: MandateCreateWithoutUserInput;
}
