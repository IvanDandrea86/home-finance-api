import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Type } from 'class-transformer';
import { MandateCreateInput } from './mandate-create.input';
import { MandateUpdateInput } from './mandate-update.input';

@ArgsType()
export class UpsertOneMandateArgs {
  @Field(() => MandateWhereUniqueInput, { nullable: false })
  @Type(() => MandateWhereUniqueInput)
  where!: MandateWhereUniqueInput;

  @Field(() => MandateCreateInput, { nullable: false })
  @Type(() => MandateCreateInput)
  create!: MandateCreateInput;

  @Field(() => MandateUpdateInput, { nullable: false })
  @Type(() => MandateUpdateInput)
  update!: MandateUpdateInput;
}
