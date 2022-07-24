import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MandateWhereInput } from './mandate-where.input';
import { Type } from 'class-transformer';
import { MandateOrderByWithRelationInput } from './mandate-order-by-with-relation.input';
import { MandateWhereUniqueInput } from './mandate-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MandateScalarFieldEnum } from './mandate-scalar-field.enum';

@ArgsType()
export class FindManyMandateArgs {
  @Field(() => MandateWhereInput, { nullable: true })
  @Type(() => MandateWhereInput)
  where?: MandateWhereInput;

  @Field(() => [MandateOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MandateOrderByWithRelationInput>;

  @Field(() => MandateWhereUniqueInput, { nullable: true })
  cursor?: MandateWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [MandateScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MandateScalarFieldEnum>;
}
