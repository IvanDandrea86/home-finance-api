import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DetailWhereInput } from './detail-where.input';
import { Type } from 'class-transformer';
import { DetailOrderByWithAggregationInput } from './detail-order-by-with-aggregation.input';
import { DetailScalarFieldEnum } from './detail-scalar-field.enum';
import { DetailScalarWhereWithAggregatesInput } from './detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DetailCountAggregateInput } from './detail-count-aggregate.input';
import { DetailAvgAggregateInput } from './detail-avg-aggregate.input';
import { DetailSumAggregateInput } from './detail-sum-aggregate.input';
import { DetailMinAggregateInput } from './detail-min-aggregate.input';
import { DetailMaxAggregateInput } from './detail-max-aggregate.input';

@ArgsType()
export class DetailGroupByArgs {

    @Field(() => DetailWhereInput, {nullable:true})
    @Type(() => DetailWhereInput)
    where?: DetailWhereInput;

    @Field(() => [DetailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DetailOrderByWithAggregationInput>;

    @Field(() => [DetailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DetailScalarFieldEnum>;

    @Field(() => DetailScalarWhereWithAggregatesInput, {nullable:true})
    having?: DetailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DetailCountAggregateInput, {nullable:true})
    _count?: DetailCountAggregateInput;

    @Field(() => DetailAvgAggregateInput, {nullable:true})
    _avg?: DetailAvgAggregateInput;

    @Field(() => DetailSumAggregateInput, {nullable:true})
    _sum?: DetailSumAggregateInput;

    @Field(() => DetailMinAggregateInput, {nullable:true})
    _min?: DetailMinAggregateInput;

    @Field(() => DetailMaxAggregateInput, {nullable:true})
    _max?: DetailMaxAggregateInput;
}
