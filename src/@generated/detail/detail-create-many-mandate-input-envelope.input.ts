import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DetailCreateManyMandateInput } from './detail-create-many-mandate.input';
import { Type } from 'class-transformer';

@InputType()
export class DetailCreateManyMandateInputEnvelope {
  @Field(() => [DetailCreateManyMandateInput], { nullable: false })
  @Type(() => DetailCreateManyMandateInput)
  data!: Array<DetailCreateManyMandateInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
