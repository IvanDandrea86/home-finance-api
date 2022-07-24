import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailScalarWhereInput } from './detail-scalar-where.input';
import { Type } from 'class-transformer';
import { DetailUpdateManyMutationInput } from './detail-update-many-mutation.input';

@InputType()
export class DetailUpdateManyWithWhereWithoutUserInput {
  @Field(() => DetailScalarWhereInput, { nullable: false })
  @Type(() => DetailScalarWhereInput)
  where!: DetailScalarWhereInput;

  @Field(() => DetailUpdateManyMutationInput, { nullable: false })
  @Type(() => DetailUpdateManyMutationInput)
  data!: DetailUpdateManyMutationInput;
}
