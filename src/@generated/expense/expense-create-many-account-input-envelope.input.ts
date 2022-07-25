import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpenseCreateManyAccountInput } from './expense-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class ExpenseCreateManyAccountInputEnvelope {

    @Field(() => [ExpenseCreateManyAccountInput], {nullable:false})
    @Type(() => ExpenseCreateManyAccountInput)
    data!: Array<ExpenseCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
