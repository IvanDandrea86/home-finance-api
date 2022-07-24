import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMandateInput } from '../user/user-create-nested-one-without-mandate.input';

@InputType()
export class MandateCreateWithoutDetailInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => UserCreateNestedOneWithoutMandateInput, { nullable: false })
  user!: UserCreateNestedOneWithoutMandateInput;
}
