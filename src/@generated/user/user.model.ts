import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { VerificationStatus } from '../prisma/verification-status.enum';
import { Permission } from '../permission/permission.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:false})
    validationToken!: string;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @Field(() => VerificationStatus, {nullable:false,defaultValue:'NOT_VERIFIED'})
    verificationStatus!: keyof typeof VerificationStatus;

    @Field(() => Permission, {nullable:true})
    permission?: Permission | null;
}
