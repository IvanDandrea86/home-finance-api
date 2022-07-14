import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class Permission {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => Role, { nullable: false })
  type!: keyof typeof Role;
}
