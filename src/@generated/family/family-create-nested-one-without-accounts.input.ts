import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutAccountsInput } from './family-create-without-accounts.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutAccountsInput } from './family-create-or-connect-without-accounts.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@InputType()
export class FamilyCreateNestedOneWithoutAccountsInput {

    @Field(() => FamilyCreateWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyCreateWithoutAccountsInput)
    create?: FamilyCreateWithoutAccountsInput;

    @Field(() => FamilyCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutAccountsInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: FamilyWhereUniqueInput;
}
