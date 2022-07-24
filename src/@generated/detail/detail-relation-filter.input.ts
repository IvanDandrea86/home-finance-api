import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';

@InputType()
export class DetailRelationFilter {
  @Field(() => DetailWhereInput, { nullable: true })
  is?: DetailWhereInput;

  @Field(() => DetailWhereInput, { nullable: true })
  isNot?: DetailWhereInput;
}
