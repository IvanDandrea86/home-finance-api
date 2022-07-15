import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDetailArgs {
  @Field(() => DetailWhereInput, { nullable: true })
  @Type(() => DetailWhereInput)
  where?: DetailWhereInput;
}
