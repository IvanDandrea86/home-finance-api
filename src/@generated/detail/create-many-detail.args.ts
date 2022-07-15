import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailCreateManyInput } from './detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDetailArgs {
  @Field(() => [DetailCreateManyInput], { nullable: false })
  @Type(() => DetailCreateManyInput)
  data!: Array<DetailCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
