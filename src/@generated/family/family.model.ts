import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Expense } from '../expense/expense.model';
import { Revenue } from '../revenue/revenue.model';
import { FamilyCount } from './family-count.output';

@ObjectType()
export class Family {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [User], { nullable: true })
  members?: Array<User>;

  @Field(() => [Expense], { nullable: true })
  expenses?: Array<Expense>;

  @Field(() => [Revenue], { nullable: true })
  revenues?: Array<Revenue>;

  @Field(() => FamilyCount, { nullable: false })
  _count?: FamilyCount;
}
