import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateWithoutFamilyInput } from './revenue-create-without-family.input';
import { Type } from 'class-transformer';
import { RevenueCreateOrConnectWithoutFamilyInput } from './revenue-create-or-connect-without-family.input';
import { RevenueCreateManyFamilyInputEnvelope } from './revenue-create-many-family-input-envelope.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';

@InputType()
export class RevenueCreateNestedManyWithoutFamilyInput {

    @Field(() => [RevenueCreateWithoutFamilyInput], {nullable:true})
    @Type(() => RevenueCreateWithoutFamilyInput)
    create?: Array<RevenueCreateWithoutFamilyInput>;

    @Field(() => [RevenueCreateOrConnectWithoutFamilyInput], {nullable:true})
    @Type(() => RevenueCreateOrConnectWithoutFamilyInput)
    connectOrCreate?: Array<RevenueCreateOrConnectWithoutFamilyInput>;

    @Field(() => RevenueCreateManyFamilyInputEnvelope, {nullable:true})
    @Type(() => RevenueCreateManyFamilyInputEnvelope)
    createMany?: RevenueCreateManyFamilyInputEnvelope;

    @Field(() => [RevenueWhereUniqueInput], {nullable:true})
    @Type(() => RevenueWhereUniqueInput)
    connect?: Array<RevenueWhereUniqueInput>;
}
