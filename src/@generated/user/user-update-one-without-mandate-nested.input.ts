import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMandateInput } from './user-create-without-mandate.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMandateInput } from './user-create-or-connect-without-mandate.input';
import { UserUpsertWithoutMandateInput } from './user-upsert-without-mandate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMandateInput } from './user-update-without-mandate.input';

@InputType()
export class UserUpdateOneWithoutMandateNestedInput {

    @Field(() => UserCreateWithoutMandateInput, {nullable:true})
    @Type(() => UserCreateWithoutMandateInput)
    create?: UserCreateWithoutMandateInput;

    @Field(() => UserCreateOrConnectWithoutMandateInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMandateInput)
    connectOrCreate?: UserCreateOrConnectWithoutMandateInput;

    @Field(() => UserUpsertWithoutMandateInput, {nullable:true})
    @Type(() => UserUpsertWithoutMandateInput)
    upsert?: UserUpsertWithoutMandateInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMandateInput, {nullable:true})
    @Type(() => UserUpdateWithoutMandateInput)
    update?: UserUpdateWithoutMandateInput;
}
