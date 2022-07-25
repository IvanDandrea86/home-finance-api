import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateManyFamilyInput } from './revenue-create-many-family.input';
import { Type } from 'class-transformer';

@InputType()
export class RevenueCreateManyFamilyInputEnvelope {

    @Field(() => [RevenueCreateManyFamilyInput], {nullable:false})
    @Type(() => RevenueCreateManyFamilyInput)
    data!: Array<RevenueCreateManyFamilyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
