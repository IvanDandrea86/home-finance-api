import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutRevenuesInput } from '../family/family-create-nested-one-without-revenues.input';

@InputType()
export class RevenueCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => FamilyCreateNestedOneWithoutRevenuesInput, { nullable: false })
  Family!: FamilyCreateNestedOneWithoutRevenuesInput;
}
