import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccountType } from '../prisma/account-type.enum';
import { Int } from '@nestjs/graphql';
import { AccountCountAggregate } from './account-count-aggregate.output';
import { AccountAvgAggregate } from './account-avg-aggregate.output';
import { AccountSumAggregate } from './account-sum-aggregate.output';
import { AccountMinAggregate } from './account-min-aggregate.output';
import { AccountMaxAggregate } from './account-max-aggregate.output';

@ObjectType()
export class AccountGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => AccountType, { nullable: false })
  type!: keyof typeof AccountType;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  monthlyBudget!: number;

  @Field(() => Int, { nullable: false })
  sold!: number;

  @Field(() => AccountCountAggregate, { nullable: true })
  _count?: AccountCountAggregate;

  @Field(() => AccountAvgAggregate, { nullable: true })
  _avg?: AccountAvgAggregate;

  @Field(() => AccountSumAggregate, { nullable: true })
  _sum?: AccountSumAggregate;

  @Field(() => AccountMinAggregate, { nullable: true })
  _min?: AccountMinAggregate;

  @Field(() => AccountMaxAggregate, { nullable: true })
  _max?: AccountMaxAggregate;
}
