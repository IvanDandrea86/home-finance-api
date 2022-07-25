import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueScalarWhereInput } from './revenue-scalar-where.input';
import { Type } from 'class-transformer';
import { RevenueUpdateManyMutationInput } from './revenue-update-many-mutation.input';

@InputType()
export class RevenueUpdateManyWithWhereWithoutFamilyInput {

    @Field(() => RevenueScalarWhereInput, {nullable:false})
    @Type(() => RevenueScalarWhereInput)
    where!: RevenueScalarWhereInput;

    @Field(() => RevenueUpdateManyMutationInput, {nullable:false})
    @Type(() => RevenueUpdateManyMutationInput)
    data!: RevenueUpdateManyMutationInput;
}
