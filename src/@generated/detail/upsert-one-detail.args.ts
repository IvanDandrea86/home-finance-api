import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';
import { DetailCreateInput } from './detail-create.input';
import { DetailUpdateInput } from './detail-update.input';

@ArgsType()
export class UpsertOneDetailArgs {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;

  @Field(() => DetailCreateInput, { nullable: false })
  @Type(() => DetailCreateInput)
  create!: DetailCreateInput;

  @Field(() => DetailUpdateInput, { nullable: false })
  @Type(() => DetailUpdateInput)
  update!: DetailUpdateInput;
}
