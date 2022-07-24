import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateNestedOneWithoutMandateInput } from '../detail/detail-create-nested-one-without-mandate.input';

@InputType()
export class MandateCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => DetailCreateNestedOneWithoutMandateInput, { nullable: true })
  detail?: DetailCreateNestedOneWithoutMandateInput;
}
