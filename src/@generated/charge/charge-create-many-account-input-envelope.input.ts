import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeCreateManyAccountInput } from './charge-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class ChargeCreateManyAccountInputEnvelope {

    @Field(() => [ChargeCreateManyAccountInput], {nullable:false})
    @Type(() => ChargeCreateManyAccountInput)
    data!: Array<ChargeCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
