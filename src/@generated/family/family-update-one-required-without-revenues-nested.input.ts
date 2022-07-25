import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutRevenuesInput } from './family-create-without-revenues.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutRevenuesInput } from './family-create-or-connect-without-revenues.input';
import { FamilyUpsertWithoutRevenuesInput } from './family-upsert-without-revenues.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateWithoutRevenuesInput } from './family-update-without-revenues.input';

@InputType()
export class FamilyUpdateOneRequiredWithoutRevenuesNestedInput {

    @Field(() => FamilyCreateWithoutRevenuesInput, {nullable:true})
    @Type(() => FamilyCreateWithoutRevenuesInput)
    create?: FamilyCreateWithoutRevenuesInput;

    @Field(() => FamilyCreateOrConnectWithoutRevenuesInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutRevenuesInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutRevenuesInput;

    @Field(() => FamilyUpsertWithoutRevenuesInput, {nullable:true})
    @Type(() => FamilyUpsertWithoutRevenuesInput)
    upsert?: FamilyUpsertWithoutRevenuesInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: FamilyWhereUniqueInput;

    @Field(() => FamilyUpdateWithoutRevenuesInput, {nullable:true})
    @Type(() => FamilyUpdateWithoutRevenuesInput)
    update?: FamilyUpdateWithoutRevenuesInput;
}
