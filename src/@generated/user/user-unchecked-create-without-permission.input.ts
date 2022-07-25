import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from '../prisma/verification-status.enum';
import { RevenueUncheckedCreateNestedManyWithoutUserInput } from '../revenue/revenue-unchecked-create-nested-many-without-user.input';
import { DetailUncheckedCreateNestedManyWithoutUserInput } from '../detail/detail-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPermissionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:false})
    validationToken!: string;

    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;

    @Field(() => VerificationStatus, {nullable:true})
    verificationStatus?: keyof typeof VerificationStatus;

    @Field(() => String, {nullable:true})
    familyId?: string;

    @Field(() => RevenueUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Revenue?: RevenueUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DetailUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Mandate?: DetailUncheckedCreateNestedManyWithoutUserInput;
}
