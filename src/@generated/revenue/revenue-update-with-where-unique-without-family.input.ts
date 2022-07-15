import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';
import { Type } from 'class-transformer';
import { RevenueUpdateWithoutFamilyInput } from './revenue-update-without-family.input';

@InputType()
export class RevenueUpdateWithWhereUniqueWithoutFamilyInput {
  @Field(() => RevenueWhereUniqueInput, { nullable: false })
  @Type(() => RevenueWhereUniqueInput)
  where!: RevenueWhereUniqueInput;

  @Field(() => RevenueUpdateWithoutFamilyInput, { nullable: false })
  @Type(() => RevenueUpdateWithoutFamilyInput)
  data!: RevenueUpdateWithoutFamilyInput;
}
