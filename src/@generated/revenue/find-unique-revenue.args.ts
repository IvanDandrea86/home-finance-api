import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRevenueArgs {

    @Field(() => RevenueWhereUniqueInput, {nullable:false})
    @Type(() => RevenueWhereUniqueInput)
    where!: RevenueWhereUniqueInput;
}
