import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';
import { Type } from 'class-transformer';
import { DetailOrderByWithRelationInput } from './detail-order-by-with-relation.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DetailScalarFieldEnum } from './detail-scalar-field.enum';

@ArgsType()
export class FindFirstDetailArgs {
  @Field(() => DetailWhereInput, { nullable: true })
  @Type(() => DetailWhereInput)
  where?: DetailWhereInput;

  @Field(() => [DetailOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<DetailOrderByWithRelationInput>;

  @Field(() => DetailWhereUniqueInput, { nullable: true })
  cursor?: DetailWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [DetailScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof DetailScalarFieldEnum>;
}
