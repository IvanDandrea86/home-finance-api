import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateCreateWithoutUserInput } from './mandate-create-without-user.input';
import { Type } from 'class-transformer';
import { MandateCreateOrConnectWithoutUserInput } from './mandate-create-or-connect-without-user.input';
import { MandateCreateManyUserInputEnvelope } from './mandate-create-many-user-input-envelope.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';

@InputType()
export class MandateCreateNestedManyWithoutUserInput {
  @Field(() => [MandateCreateWithoutUserInput], { nullable: true })
  @Type(() => MandateCreateWithoutUserInput)
  create?: Array<MandateCreateWithoutUserInput>;

  @Field(() => [MandateCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => MandateCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<MandateCreateOrConnectWithoutUserInput>;

  @Field(() => MandateCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => MandateCreateManyUserInputEnvelope)
  createMany?: MandateCreateManyUserInputEnvelope;

  @Field(() => [MandateWhereUniqueInput], { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  connect?: Array<MandateWhereUniqueInput>;
}
