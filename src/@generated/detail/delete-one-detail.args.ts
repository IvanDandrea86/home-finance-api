import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDetailArgs {
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  @Type(() => DetailWhereUniqueInput)
  where!: DetailWhereUniqueInput;
}
