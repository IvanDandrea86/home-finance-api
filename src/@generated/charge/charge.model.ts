import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Account } from '../account/account.model';

@ObjectType()
export class Charge {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Float, {nullable:false})
    cost!: number;

    @Field(() => Account, {nullable:true})
    Account?: Account | null;

    @Field(() => String, {nullable:true})
    accountId!: string | null;
}
