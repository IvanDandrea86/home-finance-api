import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailUpdateWithoutUserInput } from './detail-update-without-user.input';
import { DetailCreateWithoutUserInput } from './detail-create-without-user.input';

@InputType()
export class DetailUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    @Type(() => DetailWhereUniqueInput)
    where!: DetailWhereUniqueInput;

    @Field(() => DetailUpdateWithoutUserInput, {nullable:false})
    @Type(() => DetailUpdateWithoutUserInput)
    update!: DetailUpdateWithoutUserInput;

    @Field(() => DetailCreateWithoutUserInput, {nullable:false})
    @Type(() => DetailCreateWithoutUserInput)
    create!: DetailCreateWithoutUserInput;
}
