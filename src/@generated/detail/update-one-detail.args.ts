import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailUpdateInput } from './detail-update.input';
import { Type } from 'class-transformer';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@ArgsType()
export class UpdateOneDetailArgs {

    @Field(() => DetailUpdateInput, {nullable:false})
    @Type(() => DetailUpdateInput)
    data!: DetailUpdateInput;

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    @Type(() => DetailWhereUniqueInput)
    where!: DetailWhereUniqueInput;
}
