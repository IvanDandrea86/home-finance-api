import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Family {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
