import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutChargeInput } from './account-create-without-charge.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutChargeInput } from './account-create-or-connect-without-charge.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutChargeInput {

    @Field(() => AccountCreateWithoutChargeInput, {nullable:true})
    @Type(() => AccountCreateWithoutChargeInput)
    create?: AccountCreateWithoutChargeInput;

    @Field(() => AccountCreateOrConnectWithoutChargeInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutChargeInput)
    connectOrCreate?: AccountCreateOrConnectWithoutChargeInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;
}
