import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Detail } from '../detail/detail.model';

@ObjectType()
export class Mandate {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => Detail, { nullable: true })
  detail?: Detail | null;
}
