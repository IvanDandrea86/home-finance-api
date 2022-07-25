import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFamilyArgs {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: FamilyWhereUniqueInput;
}
