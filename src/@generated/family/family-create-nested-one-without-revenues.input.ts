import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutRevenuesInput } from './family-create-without-revenues.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutRevenuesInput } from './family-create-or-connect-without-revenues.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@InputType()
export class FamilyCreateNestedOneWithoutRevenuesInput {
  @Field(() => FamilyCreateWithoutRevenuesInput, { nullable: true })
  @Type(() => FamilyCreateWithoutRevenuesInput)
  create?: FamilyCreateWithoutRevenuesInput;

  @Field(() => FamilyCreateOrConnectWithoutRevenuesInput, { nullable: true })
  @Type(() => FamilyCreateOrConnectWithoutRevenuesInput)
  connectOrCreate?: FamilyCreateOrConnectWithoutRevenuesInput;

  @Field(() => FamilyWhereUniqueInput, { nullable: true })
  @Type(() => FamilyWhereUniqueInput)
  connect?: FamilyWhereUniqueInput;
}
