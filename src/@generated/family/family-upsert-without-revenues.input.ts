import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyUpdateWithoutRevenuesInput } from './family-update-without-revenues.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutRevenuesInput } from './family-create-without-revenues.input';

@InputType()
export class FamilyUpsertWithoutRevenuesInput {

    @Field(() => FamilyUpdateWithoutRevenuesInput, {nullable:false})
    @Type(() => FamilyUpdateWithoutRevenuesInput)
    update!: FamilyUpdateWithoutRevenuesInput;

    @Field(() => FamilyCreateWithoutRevenuesInput, {nullable:false})
    @Type(() => FamilyCreateWithoutRevenuesInput)
    create!: FamilyCreateWithoutRevenuesInput;
}
