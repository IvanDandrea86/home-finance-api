import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeScalarWhereInput } from './charge-scalar-where.input';
import { Type } from 'class-transformer';
import { ChargeUpdateManyMutationInput } from './charge-update-many-mutation.input';

@InputType()
export class ChargeUpdateManyWithWhereWithoutAccountInput {

    @Field(() => ChargeScalarWhereInput, {nullable:false})
    @Type(() => ChargeScalarWhereInput)
    where!: ChargeScalarWhereInput;

    @Field(() => ChargeUpdateManyMutationInput, {nullable:false})
    @Type(() => ChargeUpdateManyMutationInput)
    data!: ChargeUpdateManyMutationInput;
}
