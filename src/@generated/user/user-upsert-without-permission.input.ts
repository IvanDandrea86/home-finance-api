import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPermissionInput } from './user-update-without-permission.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPermissionInput } from './user-create-without-permission.input';

@InputType()
export class UserUpsertWithoutPermissionInput {
  @Field(() => UserUpdateWithoutPermissionInput, { nullable: false })
  @Type(() => UserUpdateWithoutPermissionInput)
  update!: UserUpdateWithoutPermissionInput;

  @Field(() => UserCreateWithoutPermissionInput, { nullable: false })
  @Type(() => UserCreateWithoutPermissionInput)
  create!: UserCreateWithoutPermissionInput;
}
