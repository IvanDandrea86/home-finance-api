import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutMandateInput } from './detail-create-or-connect-without-mandate.input';
import { DetailUpsertWithoutMandateInput } from './detail-upsert-without-mandate.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithoutMandateInput } from './detail-update-without-mandate.input';

@InputType()
export class DetailUpdateOneRequiredWithoutMandateNestedInput {
  @Field(() => DetailCreateWithoutMandateInput, { nullable: true })
  @Type(() => DetailCreateWithoutMandateInput)
  create?: DetailCreateWithoutMandateInput;

  @Field(() => DetailCreateOrConnectWithoutMandateInput, { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutMandateInput)
  connectOrCreate?: DetailCreateOrConnectWithoutMandateInput;

  @Field(() => DetailUpsertWithoutMandateInput, { nullable: true })
  @Type(() => DetailUpsertWithoutMandateInput)
  upsert?: DetailUpsertWithoutMandateInput;

  @Field(() => DetailWhereUniqueInput, { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: DetailWhereUniqueInput;

  @Field(() => DetailUpdateWithoutMandateInput, { nullable: true })
  @Type(() => DetailUpdateWithoutMandateInput)
  update?: DetailUpdateWithoutMandateInput;
}
