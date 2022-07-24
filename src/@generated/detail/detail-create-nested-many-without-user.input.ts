import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutUserInput } from './detail-create-without-user.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutUserInput } from './detail-create-or-connect-without-user.input';
import { DetailCreateManyUserInputEnvelope } from './detail-create-many-user-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedManyWithoutUserInput {
  @Field(() => [DetailCreateWithoutUserInput], { nullable: true })
  @Type(() => DetailCreateWithoutUserInput)
  create?: Array<DetailCreateWithoutUserInput>;

  @Field(() => [DetailCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<DetailCreateOrConnectWithoutUserInput>;

  @Field(() => DetailCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => DetailCreateManyUserInputEnvelope)
  createMany?: DetailCreateManyUserInputEnvelope;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: Array<DetailWhereUniqueInput>;
}
