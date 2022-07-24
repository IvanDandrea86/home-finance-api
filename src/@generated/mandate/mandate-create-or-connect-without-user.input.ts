import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';
import { MandateCreateWithoutUserInput } from './mandate-create-without-user.input';

@InputType()
export class MandateCreateOrConnectWithoutUserInput {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;

  @Field(() => MandateCreateWithoutUserInput, { nullable: false })
  @Type(() => MandateCreateWithoutUserInput)
  create!: MandateCreateWithoutUserInput;
}
