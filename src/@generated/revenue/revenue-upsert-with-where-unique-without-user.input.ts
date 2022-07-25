import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueUpdateWithoutUserInput } from './revenue-update-without-user.input';
import { RevenueCreateWithoutUserInput } from './revenue-create-without-user.input';

@InputType()
export class RevenueUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RevenueWhereUniqueInput, {nullable:false})
    @Type(() => RevenueWhereUniqueInput)
    where!: RevenueWhereUniqueInput;

    @Field(() => RevenueUpdateWithoutUserInput, {nullable:false})
    @Type(() => RevenueUpdateWithoutUserInput)
    update!: RevenueUpdateWithoutUserInput;

    @Field(() => RevenueCreateWithoutUserInput, {nullable:false})
    @Type(() => RevenueCreateWithoutUserInput)
    create!: RevenueCreateWithoutUserInput;
}
