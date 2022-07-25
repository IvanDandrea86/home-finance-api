import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateManyExpenseInput } from './detail-create-many-expense.input';
import { Type } from 'class-transformer';

@InputType()
export class DetailCreateManyExpenseInputEnvelope {

    @Field(() => [DetailCreateManyExpenseInput], {nullable:false})
    @Type(() => DetailCreateManyExpenseInput)
    data!: Array<DetailCreateManyExpenseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
