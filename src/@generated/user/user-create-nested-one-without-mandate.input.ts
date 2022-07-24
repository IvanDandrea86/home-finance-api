import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMandateInput } from './user-create-without-mandate.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMandateInput } from './user-create-or-connect-without-mandate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMandateInput {
  @Field(() => UserCreateWithoutMandateInput, { nullable: true })
  @Type(() => UserCreateWithoutMandateInput)
  create?: UserCreateWithoutMandateInput;

  @Field(() => UserCreateOrConnectWithoutMandateInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutMandateInput)
  connectOrCreate?: UserCreateOrConnectWithoutMandateInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;
}
