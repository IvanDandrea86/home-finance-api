import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionInput } from './user-create-without-permission.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPermissionInput } from './user-create-or-connect-without-permission.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPermissionInput {

    @Field(() => UserCreateWithoutPermissionInput, {nullable:true})
    @Type(() => UserCreateWithoutPermissionInput)
    create?: UserCreateWithoutPermissionInput;

    @Field(() => UserCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: UserCreateOrConnectWithoutPermissionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
