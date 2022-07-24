import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';
import { MandateUpdateWithoutUserInput } from './mandate-update-without-user.input';

@InputType()
export class MandateUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;

  @Field(() => MandateUpdateWithoutUserInput, { nullable: false })
  @Type(() => MandateUpdateWithoutUserInput)
  data!: MandateUpdateWithoutUserInput;
}
