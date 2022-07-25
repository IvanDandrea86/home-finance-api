import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeCreateWithoutAccountInput } from './charge-create-without-account.input';
import { Type } from 'class-transformer';
import { ChargeCreateOrConnectWithoutAccountInput } from './charge-create-or-connect-without-account.input';
import { ChargeCreateManyAccountInputEnvelope } from './charge-create-many-account-input-envelope.input';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';

@InputType()
export class ChargeCreateNestedManyWithoutAccountInput {

    @Field(() => [ChargeCreateWithoutAccountInput], {nullable:true})
    @Type(() => ChargeCreateWithoutAccountInput)
    create?: Array<ChargeCreateWithoutAccountInput>;

    @Field(() => [ChargeCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => ChargeCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<ChargeCreateOrConnectWithoutAccountInput>;

    @Field(() => ChargeCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => ChargeCreateManyAccountInputEnvelope)
    createMany?: ChargeCreateManyAccountInputEnvelope;

    @Field(() => [ChargeWhereUniqueInput], {nullable:true})
    @Type(() => ChargeWhereUniqueInput)
    connect?: Array<ChargeWhereUniqueInput>;
}
