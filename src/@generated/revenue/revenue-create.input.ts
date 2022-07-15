import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRevenueInput } from '../user/user-create-nested-one-without-revenue.input';
import { FamilyCreateNestedOneWithoutRevenuesInput } from '../family/family-create-nested-one-without-revenues.input';

@InputType()
export class RevenueCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutRevenueInput, { nullable: false })
  User!: UserCreateNestedOneWithoutRevenueInput;

  @Field(() => FamilyCreateNestedOneWithoutRevenuesInput, { nullable: false })
  Family!: FamilyCreateNestedOneWithoutRevenuesInput;
}
