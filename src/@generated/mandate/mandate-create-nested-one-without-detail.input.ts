import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateCreateWithoutDetailInput } from './mandate-create-without-detail.input';
import { Type } from 'class-transformer';
import { MandateCreateOrConnectWithoutDetailInput } from './mandate-create-or-connect-without-detail.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';

@InputType()
export class MandateCreateNestedOneWithoutDetailInput {
  @Field(() => MandateCreateWithoutDetailInput, { nullable: true })
  @Type(() => MandateCreateWithoutDetailInput)
  create?: MandateCreateWithoutDetailInput;

  @Field(() => MandateCreateOrConnectWithoutDetailInput, { nullable: true })
  @Type(() => MandateCreateOrConnectWithoutDetailInput)
  connectOrCreate?: MandateCreateOrConnectWithoutDetailInput;

  @Field(() => MandateWhereUniqueInput, { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  connect?: MandateWhereUniqueInput;
}
