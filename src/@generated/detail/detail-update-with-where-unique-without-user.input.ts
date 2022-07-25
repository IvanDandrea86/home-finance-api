import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailUpdateWithoutUserInput } from './detail-update-without-user.input';

@InputType()
export class DetailUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    @Type(() => DetailWhereUniqueInput)
    where!: DetailWhereUniqueInput;

    @Field(() => DetailUpdateWithoutUserInput, {nullable:false})
    @Type(() => DetailUpdateWithoutUserInput)
    data!: DetailUpdateWithoutUserInput;
}
