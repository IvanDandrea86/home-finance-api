import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutRevenuesInput } from './family-create-without-revenues.input';

@InputType()
export class FamilyCreateOrConnectWithoutRevenuesInput {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: FamilyWhereUniqueInput;

    @Field(() => FamilyCreateWithoutRevenuesInput, {nullable:false})
    @Type(() => FamilyCreateWithoutRevenuesInput)
    create!: FamilyCreateWithoutRevenuesInput;
}
