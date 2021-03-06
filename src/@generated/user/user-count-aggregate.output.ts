import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    validationToken!: number;

    @Field(() => Int, {nullable:false})
    lastLogin!: number;

    @Field(() => Int, {nullable:false})
    verificationStatus!: number;

    @Field(() => Int, {nullable:false})
    familyId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
