import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRevenueInput } from './user-update-without-revenue.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRevenueInput } from './user-create-without-revenue.input';

@InputType()
export class UserUpsertWithoutRevenueInput {
  @Field(() => UserUpdateWithoutRevenueInput, { nullable: false })
  @Type(() => UserUpdateWithoutRevenueInput)
  update!: UserUpdateWithoutRevenueInput;

  @Field(() => UserCreateWithoutRevenueInput, { nullable: false })
  @Type(() => UserCreateWithoutRevenueInput)
  create!: UserCreateWithoutRevenueInput;
}
