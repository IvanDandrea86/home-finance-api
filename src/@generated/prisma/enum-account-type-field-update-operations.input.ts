import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountType } from './account-type.enum';

@InputType()
export class EnumAccountTypeFieldUpdateOperationsInput {

    @Field(() => AccountType, {nullable:true})
    set?: keyof typeof AccountType;
}
