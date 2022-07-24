import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailUpdateWithoutMandateInput } from './detail-update-without-mandate.input';
import { Type } from 'class-transformer';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';

@InputType()
export class DetailUpsertWithoutMandateInput {
  @Field(() => DetailUpdateWithoutMandateInput, { nullable: false })
  @Type(() => DetailUpdateWithoutMandateInput)
  update!: DetailUpdateWithoutMandateInput;

  @Field(() => DetailCreateWithoutMandateInput, { nullable: false })
  @Type(() => DetailCreateWithoutMandateInput)
  create!: DetailCreateWithoutMandateInput;
}
