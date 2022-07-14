import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutUserInput } from './permission-update-without-user.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';

@InputType()
export class PermissionUpsertWithoutUserInput {
  @Field(() => PermissionUpdateWithoutUserInput, { nullable: false })
  @Type(() => PermissionUpdateWithoutUserInput)
  update!: PermissionUpdateWithoutUserInput;

  @Field(() => PermissionCreateWithoutUserInput, { nullable: false })
  @Type(() => PermissionCreateWithoutUserInput)
  create!: PermissionCreateWithoutUserInput;
}
