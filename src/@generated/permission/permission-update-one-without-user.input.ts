import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUserInput } from './permission-create-or-connect-without-user.input';
import { PermissionUpsertWithoutUserInput } from './permission-upsert-without-user.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutUserInput } from './permission-update-without-user.input';

@InputType()
export class PermissionUpdateOneWithoutUserInput {

    @Field(() => PermissionCreateWithoutUserInput, {nullable:true})
    @Type(() => PermissionCreateWithoutUserInput)
    create?: PermissionCreateWithoutUserInput;

    @Field(() => PermissionCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput;

    @Field(() => PermissionUpsertWithoutUserInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutUserInput)
    upsert?: PermissionUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUserInput, {nullable:true})
    @Type(() => PermissionUpdateWithoutUserInput)
    update?: PermissionUpdateWithoutUserInput;
}
