import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeWhereInput } from './charge-where.input';

@InputType()
export class ChargeListRelationFilter {

    @Field(() => ChargeWhereInput, {nullable:true})
    every?: ChargeWhereInput;

    @Field(() => ChargeWhereInput, {nullable:true})
    some?: ChargeWhereInput;

    @Field(() => ChargeWhereInput, {nullable:true})
    none?: ChargeWhereInput;
}
