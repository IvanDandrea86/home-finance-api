import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChargeWhereInput } from './charge-where.input';
import { Type } from 'class-transformer';
import { ChargeOrderByWithRelationInput } from './charge-order-by-with-relation.input';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChargeScalarFieldEnum } from './charge-scalar-field.enum';

@ArgsType()
export class FindManyChargeArgs {

    @Field(() => ChargeWhereInput, {nullable:true})
    @Type(() => ChargeWhereInput)
    where?: ChargeWhereInput;

    @Field(() => [ChargeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChargeOrderByWithRelationInput>;

    @Field(() => ChargeWhereUniqueInput, {nullable:true})
    cursor?: ChargeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChargeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChargeScalarFieldEnum>;
}
