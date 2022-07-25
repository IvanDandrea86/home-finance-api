import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutAccountsInput } from './family-create-without-accounts.input';

@InputType()
export class FamilyCreateOrConnectWithoutAccountsInput {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: FamilyWhereUniqueInput;

    @Field(() => FamilyCreateWithoutAccountsInput, {nullable:false})
    @Type(() => FamilyCreateWithoutAccountsInput)
    create!: FamilyCreateWithoutAccountsInput;
}
