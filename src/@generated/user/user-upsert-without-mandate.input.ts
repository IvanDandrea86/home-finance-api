import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMandateInput } from './user-update-without-mandate.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMandateInput } from './user-create-without-mandate.input';

@InputType()
export class UserUpsertWithoutMandateInput {

    @Field(() => UserUpdateWithoutMandateInput, {nullable:false})
    @Type(() => UserUpdateWithoutMandateInput)
    update!: UserUpdateWithoutMandateInput;

    @Field(() => UserCreateWithoutMandateInput, {nullable:false})
    @Type(() => UserCreateWithoutMandateInput)
    create!: UserCreateWithoutMandateInput;
}
