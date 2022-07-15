import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FamilyWhereInput {

    @Field(() => [FamilyWhereInput], {nullable:true})
    AND?: Array<FamilyWhereInput>;

    @Field(() => [FamilyWhereInput], {nullable:true})
    OR?: Array<FamilyWhereInput>;

    @Field(() => [FamilyWhereInput], {nullable:true})
    NOT?: Array<FamilyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
