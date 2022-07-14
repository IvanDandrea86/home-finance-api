import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPermissionInput } from './user-create-without-permission.input';

@InputType()
export class UserCreateOrConnectWithoutPermissionInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutPermissionInput, { nullable: false })
  @Type(() => UserCreateWithoutPermissionInput)
  create!: UserCreateWithoutPermissionInput;
}
