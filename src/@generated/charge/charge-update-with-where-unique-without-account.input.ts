import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Type } from 'class-transformer';
import { ChargeUpdateWithoutAccountInput } from './charge-update-without-account.input';

@InputType()
export class ChargeUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => ChargeWhereUniqueInput, {nullable:false})
    @Type(() => ChargeWhereUniqueInput)
    where!: ChargeWhereUniqueInput;

    @Field(() => ChargeUpdateWithoutAccountInput, {nullable:false})
    @Type(() => ChargeUpdateWithoutAccountInput)
    data!: ChargeUpdateWithoutAccountInput;
}
