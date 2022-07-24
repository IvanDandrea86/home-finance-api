import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateScalarWhereInput } from './mandate-scalar-where.input';
import { Type } from 'class-transformer';
import { MandateUpdateManyMutationInput } from './mandate-update-many-mutation.input';

@InputType()
export class MandateUpdateManyWithWhereWithoutUserInput {
  @Field(() => MandateScalarWhereInput, { nullable: false })
  @Type(() => MandateScalarWhereInput)
  where!: MandateScalarWhereInput;

  @Field(() => MandateUpdateManyMutationInput, { nullable: false })
  @Type(() => MandateUpdateManyMutationInput)
  data!: MandateUpdateManyMutationInput;
}
