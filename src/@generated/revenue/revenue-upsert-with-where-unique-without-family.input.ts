import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueUpdateWithoutFamilyInput } from './revenue-update-without-family.input';
import { RevenueCreateWithoutFamilyInput } from './revenue-create-without-family.input';

@InputType()
export class RevenueUpsertWithWhereUniqueWithoutFamilyInput {
  @Field(() => RevenueWhereUniqueInput, { nullable: false })
  @Type(() => RevenueWhereUniqueInput)
  where!: RevenueWhereUniqueInput;

  @Field(() => RevenueUpdateWithoutFamilyInput, { nullable: false })
  @Type(() => RevenueUpdateWithoutFamilyInput)
  update!: RevenueUpdateWithoutFamilyInput;

  @Field(() => RevenueCreateWithoutFamilyInput, { nullable: false })
  @Type(() => RevenueCreateWithoutFamilyInput)
  create!: RevenueCreateWithoutFamilyInput;
}
