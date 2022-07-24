import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChargeWhereUniqueInput } from './charge-where-unique.input';
import { Type } from 'class-transformer';
import { ChargeCreateWithoutAccountInput } from './charge-create-without-account.input';

@InputType()
export class ChargeCreateOrConnectWithoutAccountInput {
  @Field(() => ChargeWhereUniqueInput, { nullable: false })
  @Type(() => ChargeWhereUniqueInput)
  where!: ChargeWhereUniqueInput;

  @Field(() => ChargeCreateWithoutAccountInput, { nullable: false })
  @Type(() => ChargeCreateWithoutAccountInput)
  create!: ChargeCreateWithoutAccountInput;
}
