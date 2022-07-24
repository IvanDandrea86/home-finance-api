import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateCreateWithoutDetailInput } from './mandate-create-without-detail.input';
import { Type } from 'class-transformer';
import { MandateCreateOrConnectWithoutDetailInput } from './mandate-create-or-connect-without-detail.input';
import { MandateUpsertWithoutDetailInput } from './mandate-upsert-without-detail.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { MandateUpdateWithoutDetailInput } from './mandate-update-without-detail.input';

@InputType()
export class MandateUpdateOneRequiredWithoutDetailNestedInput {
  @Field(() => MandateCreateWithoutDetailInput, { nullable: true })
  @Type(() => MandateCreateWithoutDetailInput)
  create?: MandateCreateWithoutDetailInput;

  @Field(() => MandateCreateOrConnectWithoutDetailInput, { nullable: true })
  @Type(() => MandateCreateOrConnectWithoutDetailInput)
  connectOrCreate?: MandateCreateOrConnectWithoutDetailInput;

  @Field(() => MandateUpsertWithoutDetailInput, { nullable: true })
  @Type(() => MandateUpsertWithoutDetailInput)
  upsert?: MandateUpsertWithoutDetailInput;

  @Field(() => MandateWhereUniqueInput, { nullable: true })
  @Type(() => MandateWhereUniqueInput)
  connect?: MandateWhereUniqueInput;

  @Field(() => MandateUpdateWithoutDetailInput, { nullable: true })
  @Type(() => MandateUpdateWithoutDetailInput)
  update?: MandateUpdateWithoutDetailInput;
}
