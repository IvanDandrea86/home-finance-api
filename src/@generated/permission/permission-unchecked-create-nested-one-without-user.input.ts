import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUserInput } from './permission-create-or-connect-without-user.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => PermissionCreateWithoutUserInput, {nullable:true})
    @Type(() => PermissionCreateWithoutUserInput)
    create?: PermissionCreateWithoutUserInput;

    @Field(() => PermissionCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;
}
