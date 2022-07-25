import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutAccountsInput } from './family-create-without-accounts.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutAccountsInput } from './family-create-or-connect-without-accounts.input';
import { FamilyUpsertWithoutAccountsInput } from './family-upsert-without-accounts.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateWithoutAccountsInput } from './family-update-without-accounts.input';

@InputType()
export class FamilyUpdateOneWithoutAccountsNestedInput {

    @Field(() => FamilyCreateWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyCreateWithoutAccountsInput)
    create?: FamilyCreateWithoutAccountsInput;

    @Field(() => FamilyCreateOrConnectWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutAccountsInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutAccountsInput;

    @Field(() => FamilyUpsertWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyUpsertWithoutAccountsInput)
    upsert?: FamilyUpsertWithoutAccountsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: FamilyWhereUniqueInput;

    @Field(() => FamilyUpdateWithoutAccountsInput, {nullable:true})
    @Type(() => FamilyUpdateWithoutAccountsInput)
    update?: FamilyUpdateWithoutAccountsInput;
}
