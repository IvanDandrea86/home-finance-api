import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionInput } from './user-create-without-permission.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPermissionInput } from './user-create-or-connect-without-permission.input';
import { UserUpsertWithoutPermissionInput } from './user-upsert-without-permission.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPermissionInput } from './user-update-without-permission.input';

@InputType()
export class UserUpdateOneWithoutPermissionInput {

    @Field(() => UserCreateWithoutPermissionInput, {nullable:true})
    @Type(() => UserCreateWithoutPermissionInput)
    create?: UserCreateWithoutPermissionInput;

    @Field(() => UserCreateOrConnectWithoutPermissionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: UserCreateOrConnectWithoutPermissionInput;

    @Field(() => UserUpsertWithoutPermissionInput, {nullable:true})
    @Type(() => UserUpsertWithoutPermissionInput)
    upsert?: UserUpsertWithoutPermissionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPermissionInput, {nullable:true})
    @Type(() => UserUpdateWithoutPermissionInput)
    update?: UserUpdateWithoutPermissionInput;
}
