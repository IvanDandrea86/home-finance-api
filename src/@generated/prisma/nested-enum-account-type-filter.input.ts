import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from './account-type.enum';

@InputType()
export class NestedEnumAccountTypeFilter {
  @Field(() => AccountType, { nullable: true })
  equals?: keyof typeof AccountType;

  @Field(() => [AccountType], { nullable: true })
  in?: Array<keyof typeof AccountType>;

  @Field(() => [AccountType], { nullable: true })
  notIn?: Array<keyof typeof AccountType>;

  @Field(() => NestedEnumAccountTypeFilter, { nullable: true })
  not?: NestedEnumAccountTypeFilter;
}
