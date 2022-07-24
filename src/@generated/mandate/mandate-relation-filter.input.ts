import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';

@InputType()
export class MandateRelationFilter {
  @Field(() => MandateWhereInput, { nullable: true })
  is?: MandateWhereInput;

  @Field(() => MandateWhereInput, { nullable: true })
  isNot?: MandateWhereInput;
}
