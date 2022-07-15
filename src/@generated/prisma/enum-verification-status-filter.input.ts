import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from './verification-status.enum';
import { NestedEnumVerificationStatusFilter } from './nested-enum-verification-status-filter.input';

@InputType()
export class EnumVerificationStatusFilter {

    @Field(() => VerificationStatus, {nullable:true})
    equals?: keyof typeof VerificationStatus;

    @Field(() => [VerificationStatus], {nullable:true})
    in?: Array<keyof typeof VerificationStatus>;

    @Field(() => [VerificationStatus], {nullable:true})
    notIn?: Array<keyof typeof VerificationStatus>;

    @Field(() => NestedEnumVerificationStatusFilter, {nullable:true})
    not?: NestedEnumVerificationStatusFilter;
}
