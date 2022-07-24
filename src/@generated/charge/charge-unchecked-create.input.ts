import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ChargeUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Float, { nullable: false })
  cost!: number;

  @Field(() => String, { nullable: true })
  accountId?: string;
}
