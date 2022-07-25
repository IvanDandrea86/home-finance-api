import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereInput } from './charge-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyChargeArgs {

    @Field(() => ChargeWhereInput, {nullable:true})
    @Type(() => ChargeWhereInput)
    where?: ChargeWhereInput;
}
