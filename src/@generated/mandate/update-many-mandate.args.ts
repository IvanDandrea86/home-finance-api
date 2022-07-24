import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateUpdateManyMutationInput } from './mandate-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MandateWhereInput } from './mandate-where.input';

@ArgsType()
export class UpdateManyMandateArgs {
  @Field(() => MandateUpdateManyMutationInput, { nullable: false })
  @Type(() => MandateUpdateManyMutationInput)
  data!: MandateUpdateManyMutationInput;

  @Field(() => MandateWhereInput, { nullable: true })
  @Type(() => MandateWhereInput)
  where?: MandateWhereInput;
}
