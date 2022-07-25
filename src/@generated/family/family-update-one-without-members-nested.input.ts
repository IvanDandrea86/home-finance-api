import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutMembersInput } from './family-create-without-members.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutMembersInput } from './family-create-or-connect-without-members.input';
import { FamilyUpsertWithoutMembersInput } from './family-upsert-without-members.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateWithoutMembersInput } from './family-update-without-members.input';

@InputType()
export class FamilyUpdateOneWithoutMembersNestedInput {

    @Field(() => FamilyCreateWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateWithoutMembersInput)
    create?: FamilyCreateWithoutMembersInput;

    @Field(() => FamilyCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutMembersInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput;

    @Field(() => FamilyUpsertWithoutMembersInput, {nullable:true})
    @Type(() => FamilyUpsertWithoutMembersInput)
    upsert?: FamilyUpsertWithoutMembersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: FamilyWhereUniqueInput;

    @Field(() => FamilyUpdateWithoutMembersInput, {nullable:true})
    @Type(() => FamilyUpdateWithoutMembersInput)
    update?: FamilyUpdateWithoutMembersInput;
}
