import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RevenueCreateManyUserInput } from './revenue-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RevenueCreateManyUserInputEnvelope {
  @Field(() => [RevenueCreateManyUserInput], { nullable: false })
  @Type(() => RevenueCreateManyUserInput)
  data!: Array<RevenueCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
