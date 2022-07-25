import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutFamilyInput } from './account-update-without-family.input';

@InputType()
export class AccountUpdateWithWhereUniqueWithoutFamilyInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountUpdateWithoutFamilyInput, {nullable:false})
    @Type(() => AccountUpdateWithoutFamilyInput)
    data!: AccountUpdateWithoutFamilyInput;
}
