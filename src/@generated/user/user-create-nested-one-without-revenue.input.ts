import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRevenueInput } from './user-create-without-revenue.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRevenueInput } from './user-create-or-connect-without-revenue.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRevenueInput {
  @Field(() => UserCreateWithoutRevenueInput, { nullable: true })
  @Type(() => UserCreateWithoutRevenueInput)
  create?: UserCreateWithoutRevenueInput;

  @Field(() => UserCreateOrConnectWithoutRevenueInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutRevenueInput)
  connectOrCreate?: UserCreateOrConnectWithoutRevenueInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;
}
