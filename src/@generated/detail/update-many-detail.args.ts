import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailUpdateManyMutationInput } from './detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DetailWhereInput } from './detail-where.input';

@ArgsType()
export class UpdateManyDetailArgs {
  @Field(() => DetailUpdateManyMutationInput, { nullable: false })
  @Type(() => DetailUpdateManyMutationInput)
  data!: DetailUpdateManyMutationInput;

  @Field(() => DetailWhereInput, { nullable: true })
  @Type(() => DetailWhereInput)
  where?: DetailWhereInput;
}
