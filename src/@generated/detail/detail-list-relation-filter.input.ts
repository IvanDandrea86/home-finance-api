import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';

@InputType()
export class DetailListRelationFilter {
  @Field(() => DetailWhereInput, { nullable: true })
  every?: DetailWhereInput;

  @Field(() => DetailWhereInput, { nullable: true })
  some?: DetailWhereInput;

  @Field(() => DetailWhereInput, { nullable: true })
  none?: DetailWhereInput;
}
