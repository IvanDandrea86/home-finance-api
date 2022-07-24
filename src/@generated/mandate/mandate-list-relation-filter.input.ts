import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';

@InputType()
export class MandateListRelationFilter {
  @Field(() => MandateWhereInput, { nullable: true })
  every?: MandateWhereInput;

  @Field(() => MandateWhereInput, { nullable: true })
  some?: MandateWhereInput;

  @Field(() => MandateWhereInput, { nullable: true })
  none?: MandateWhereInput;
}
