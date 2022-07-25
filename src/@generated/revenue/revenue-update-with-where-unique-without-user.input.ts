import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueUpdateWithoutUserInput } from './revenue-update-without-user.input';

@InputType()
export class RevenueUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RevenueWhereUniqueInput, {nullable:false})
    @Type(() => RevenueWhereUniqueInput)
    where!: RevenueWhereUniqueInput;

    @Field(() => RevenueUpdateWithoutUserInput, {nullable:false})
    @Type(() => RevenueUpdateWithoutUserInput)
    data!: RevenueUpdateWithoutUserInput;
}
