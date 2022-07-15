import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPermissionInput } from '../user/user-create-nested-one-without-permission.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class PermissionCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutPermissionInput, { nullable: true })
  User?: UserCreateNestedOneWithoutPermissionInput;

  @Field(() => Role, { nullable: false })
  type!: keyof typeof Role;
}
