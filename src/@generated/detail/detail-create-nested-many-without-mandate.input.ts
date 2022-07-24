import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutMandateInput } from './detail-create-or-connect-without-mandate.input';
import { DetailCreateManyMandateInputEnvelope } from './detail-create-many-mandate-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedManyWithoutMandateInput {
  @Field(() => [DetailCreateWithoutMandateInput], { nullable: true })
  @Type(() => DetailCreateWithoutMandateInput)
  create?: Array<DetailCreateWithoutMandateInput>;

  @Field(() => [DetailCreateOrConnectWithoutMandateInput], { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutMandateInput)
  connectOrCreate?: Array<DetailCreateOrConnectWithoutMandateInput>;

  @Field(() => DetailCreateManyMandateInputEnvelope, { nullable: true })
  @Type(() => DetailCreateManyMandateInputEnvelope)
  createMany?: DetailCreateManyMandateInputEnvelope;

  @Field(() => [DetailWhereUniqueInput], { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: Array<DetailWhereUniqueInput>;
}
