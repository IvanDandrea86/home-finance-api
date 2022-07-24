import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUncheckedCreateNestedOneWithoutMandateInput } from '../detail/detail-unchecked-create-nested-one-without-mandate.input';

@InputType()
export class MandateUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => DetailUncheckedCreateNestedOneWithoutMandateInput, {
    nullable: true,
  })
  detail?: DetailUncheckedCreateNestedOneWithoutMandateInput;
}
