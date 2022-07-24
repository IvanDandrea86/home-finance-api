import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateCreateManyInput } from './mandate-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMandateArgs {
  @Field(() => [MandateCreateManyInput], { nullable: false })
  @Type(() => MandateCreateManyInput)
  data!: Array<MandateCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
