import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { Type } from 'class-transformer';
import { FamilyOrderByWithRelationInput } from './family-order-by-with-relation.input';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FamilyScalarFieldEnum } from './family-scalar-field.enum';

@ArgsType()
export class FindFirstFamilyArgs {
  @Field(() => FamilyWhereInput, { nullable: true })
  @Type(() => FamilyWhereInput)
  where?: FamilyWhereInput;

  @Field(() => [FamilyOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FamilyOrderByWithRelationInput>;

  @Field(() => FamilyWhereUniqueInput, { nullable: true })
  cursor?: FamilyWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [FamilyScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FamilyScalarFieldEnum>;
}
