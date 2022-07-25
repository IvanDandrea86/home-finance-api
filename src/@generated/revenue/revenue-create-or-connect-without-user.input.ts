import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueCreateWithoutUserInput } from './revenue-create-without-user.input';

@InputType()
export class RevenueCreateOrConnectWithoutUserInput {

    @Field(() => RevenueWhereUniqueInput, {nullable:false})
    @Type(() => RevenueWhereUniqueInput)
    where!: RevenueWhereUniqueInput;

    @Field(() => RevenueCreateWithoutUserInput, {nullable:false})
    @Type(() => RevenueCreateWithoutUserInput)
    create!: RevenueCreateWithoutUserInput;
}
