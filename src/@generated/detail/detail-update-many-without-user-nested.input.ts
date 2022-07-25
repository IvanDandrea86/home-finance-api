import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateWithoutUserInput } from './detail-create-without-user.input';
import { Type } from 'class-transformer';
import { DetailCreateOrConnectWithoutUserInput } from './detail-create-or-connect-without-user.input';
import { DetailUpsertWithWhereUniqueWithoutUserInput } from './detail-upsert-with-where-unique-without-user.input';
import { DetailCreateManyUserInputEnvelope } from './detail-create-many-user-input-envelope.input';
import { DetailWhereUniqueInput } from './detail-where-unique.input';
import { DetailUpdateWithWhereUniqueWithoutUserInput } from './detail-update-with-where-unique-without-user.input';
import { DetailUpdateManyWithWhereWithoutUserInput } from './detail-update-many-with-where-without-user.input';
import { DetailScalarWhereInput } from './detail-scalar-where.input';

@InputType()
export class DetailUpdateManyWithoutUserNestedInput {

    @Field(() => [DetailCreateWithoutUserInput], {nullable:true})
    @Type(() => DetailCreateWithoutUserInput)
    create?: Array<DetailCreateWithoutUserInput>;

    @Field(() => [DetailCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DetailCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DetailCreateOrConnectWithoutUserInput>;

    @Field(() => [DetailUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DetailUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<DetailUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DetailCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DetailCreateManyUserInputEnvelope)
    createMany?: DetailCreateManyUserInputEnvelope;

    @Field(() => [DetailWhereUniqueInput], {nullable:true})
    @Type(() => DetailWhereUniqueInput)
    set?: Array<DetailWhereUniqueInput>;

    @Field(() => [DetailWhereUniqueInput], {nullable:true})
    @Type(() => DetailWhereUniqueInput)
    disconnect?: Array<DetailWhereUniqueInput>;

    @Field(() => [DetailWhereUniqueInput], {nullable:true})
    @Type(() => DetailWhereUniqueInput)
    delete?: Array<DetailWhereUniqueInput>;

    @Field(() => [DetailWhereUniqueInput], {nullable:true})
    @Type(() => DetailWhereUniqueInput)
    connect?: Array<DetailWhereUniqueInput>;

    @Field(() => [DetailUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DetailUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<DetailUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DetailUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => DetailUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<DetailUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DetailScalarWhereInput], {nullable:true})
    @Type(() => DetailScalarWhereInput)
    deleteMany?: Array<DetailScalarWhereInput>;
}
