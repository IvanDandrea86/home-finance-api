import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueCreateWithoutFamilyInput } from './revenue-create-without-family.input';

@InputType()
export class RevenueCreateOrConnectWithoutFamilyInput {

    @Field(() => RevenueWhereUniqueInput, {nullable:false})
    @Type(() => RevenueWhereUniqueInput)
    where!: RevenueWhereUniqueInput;

    @Field(() => RevenueCreateWithoutFamilyInput, {nullable:false})
    @Type(() => RevenueCreateWithoutFamilyInput)
    create!: RevenueCreateWithoutFamilyInput;
}
