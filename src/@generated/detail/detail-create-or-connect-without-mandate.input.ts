import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';

@InputType()
export class DetailCreateOrConnectWithoutMandateInput {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;

  @Field(() => DetailCreateWithoutMandateInput, { nullable: false })
  @Type(() => DetailCreateWithoutMandateInput)
  create!: DetailCreateWithoutMandateInput;
}
