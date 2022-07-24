import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MandateUncheckedCreateWithoutDetailInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: false })
  status!: boolean;

  @Field(() => String, { nullable: false })
  userId!: string;
}
