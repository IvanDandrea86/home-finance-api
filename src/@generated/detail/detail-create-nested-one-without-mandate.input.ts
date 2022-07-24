import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutMandateInput } from './detail-create-without-mandate.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutMandateInput } from './detail-create-or-connect-without-mandate.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';

@InputType()
export class DetailCreateNestedOneWithoutMandateInput {
  @Field(() => DetailCreateWithoutMandateInput, { nullable: true })
  @Type(() => DetailCreateWithoutMandateInput)
  create?: DetailCreateWithoutMandateInput;

  @Field(() => DetailCreateOrConnectWithoutMandateInput, { nullable: true })
  @Type(() => DetailCreateOrConnectWithoutMandateInput)
  connectOrCreate?: DetailCreateOrConnectWithoutMandateInput;

  @Field(() => DetailWhereUniqueInput, { nullable: true })
  @Type(() => DetailWhereUniqueInput)
  connect?: DetailWhereUniqueInput;
}
