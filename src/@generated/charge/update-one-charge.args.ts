import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeUpdateInput } from './charge-update.input';
import { Type } from 'class-transformer';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';

@ArgsType()
export class UpdateOneChargeArgs {

    @Field(() => ChargeUpdateInput, {nullable:false})
    @Type(() => ChargeUpdateInput)
    data!: ChargeUpdateInput;

    @Field(() => ChargeWhereUniqueInput, {nullable:false})
    @Type(() => ChargeWhereUniqueInput)
    where!: ChargeWhereUniqueInput;
}
