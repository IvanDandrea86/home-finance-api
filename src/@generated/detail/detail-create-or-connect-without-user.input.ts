import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailCreateWithoutUserInput } from './detail-create-without-user.input';

@InputType()
export class DetailCreateOrConnectWithoutUserInput {

    @Field(() => DetailWhereUniqueInput, {nullable:false})
    @Type(() => DetailWhereUniqueInput)
    where!: DetailWhereUniqueInput;

    @Field(() => DetailCreateWithoutUserInput, {nullable:false})
    @Type(() => DetailCreateWithoutUserInput)
    create!: DetailCreateWithoutUserInput;
}
