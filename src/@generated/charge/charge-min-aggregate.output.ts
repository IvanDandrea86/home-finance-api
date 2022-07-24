import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChargeMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Float, { nullable: true })
  cost?: number;

  @Field(() => String, { nullable: true })
  accountId?: string;
}
