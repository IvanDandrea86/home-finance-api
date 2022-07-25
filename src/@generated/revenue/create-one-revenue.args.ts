import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevenueCreateInput } from './revenue-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRevenueArgs {

    @Field(() => RevenueCreateInput, {nullable:false})
    @Type(() => RevenueCreateInput)
    data!: RevenueCreateInput;
}
