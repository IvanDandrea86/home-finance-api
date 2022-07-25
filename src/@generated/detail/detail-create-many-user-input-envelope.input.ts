import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateManyUserInput } from './detail-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DetailCreateManyUserInputEnvelope {

    @Field(() => [DetailCreateManyUserInput], {nullable:false})
    @Type(() => DetailCreateManyUserInput)
    data!: Array<DetailCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
