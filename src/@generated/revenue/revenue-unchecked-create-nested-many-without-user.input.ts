import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateWithoutUserInput } from './revenue-create-without-user.input';
import { Type } from 'class-transformer';
import { RevenueCreateOrConnectWithoutUserInput } from './revenue-create-or-connect-without-user.input';
import { RevenueCreateManyUserInputEnvelope } from './revenue-create-many-user-input-envelope.input';
import { RevenueWhereUniqueInput } from './revenue-where-unique.input';

@InputType()
export class RevenueUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [RevenueCreateWithoutUserInput], { nullable: true })
  @Type(() => RevenueCreateWithoutUserInput)
  create?: Array<RevenueCreateWithoutUserInput>;

  @Field(() => [RevenueCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => RevenueCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<RevenueCreateOrConnectWithoutUserInput>;

  @Field(() => RevenueCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => RevenueCreateManyUserInputEnvelope)
  createMany?: RevenueCreateManyUserInputEnvelope;

  @Field(() => [RevenueWhereUniqueInput], { nullable: true })
  @Type(() => RevenueWhereUniqueInput)
  connect?: Array<RevenueWhereUniqueInput>;
}
