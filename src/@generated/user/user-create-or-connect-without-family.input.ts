import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFamilyInput } from './user-create-without-family.input';

@InputType()
export class UserCreateOrConnectWithoutFamilyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFamilyInput, {nullable:false})
    @Type(() => UserCreateWithoutFamilyInput)
    create!: UserCreateWithoutFamilyInput;
}
