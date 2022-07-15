import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailCreateInput } from './detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDetailArgs {
  @Field(() => DetailCreateInput, { nullable: false })
  @Type(() => DetailCreateInput)
  data!: DetailCreateInput;
}
