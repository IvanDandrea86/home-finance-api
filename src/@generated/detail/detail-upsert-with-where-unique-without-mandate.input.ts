import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailUpdateWithoutMandateInput } from './detail-update-without-mandate.input';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';

@InputType()
export class DetailUpsertWithWhereUniqueWithoutMandateInput {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;

  @Field(() => DetailUpdateWithoutMandateInput, { nullable: false })
  @Type(() => DetailUpdateWithoutMandateInput)
  update!: DetailUpdateWithoutMandateInput;

  @Field(() => DetailCreateWithoutMandateInput, { nullable: false })
  @Type(() => DetailCreateWithoutMandateInput)
  create!: DetailCreateWithoutMandateInput;
}
