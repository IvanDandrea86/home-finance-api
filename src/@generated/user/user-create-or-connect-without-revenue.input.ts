import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRevenueInput } from './user-create-without-revenue.input';

@InputType()
export class UserCreateOrConnectWithoutRevenueInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutRevenueInput, { nullable: false })
  @Type(() => UserCreateWithoutRevenueInput)
  create!: UserCreateWithoutRevenueInput;
}
