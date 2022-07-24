import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMandateInput } from './user-create-without-mandate.input';

@InputType()
export class UserCreateOrConnectWithoutMandateInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutMandateInput, { nullable: false })
  @Type(() => UserCreateWithoutMandateInput)
  create!: UserCreateWithoutMandateInput;
}
