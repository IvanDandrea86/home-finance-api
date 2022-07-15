import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRevenueInput } from './user-create-without-revenue.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRevenueInput } from './user-create-or-connect-without-revenue.input';
import { UserUpsertWithoutRevenueInput } from './user-upsert-without-revenue.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRevenueInput } from './user-update-without-revenue.input';

@InputType()
export class UserUpdateOneRequiredWithoutRevenueInput {
  @Field(() => UserCreateWithoutRevenueInput, { nullable: true })
  @Type(() => UserCreateWithoutRevenueInput)
  create?: UserCreateWithoutRevenueInput;

  @Field(() => UserCreateOrConnectWithoutRevenueInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutRevenueInput)
  connectOrCreate?: UserCreateOrConnectWithoutRevenueInput;

  @Field(() => UserUpsertWithoutRevenueInput, { nullable: true })
  @Type(() => UserUpsertWithoutRevenueInput)
  upsert?: UserUpsertWithoutRevenueInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutRevenueInput, { nullable: true })
  @Type(() => UserUpdateWithoutRevenueInput)
  update?: UserUpdateWithoutRevenueInput;
}
