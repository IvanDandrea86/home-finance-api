import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutMembersInput } from './family-create-without-members.input';

@InputType()
export class FamilyCreateOrConnectWithoutMembersInput {
  @Field(() => FamilyWhereUniqueInput, { nullable: false })
  @Type(() => FamilyWhereUniqueInput)
  where!: FamilyWhereUniqueInput;

  @Field(() => FamilyCreateWithoutMembersInput, { nullable: false })
  @Type(() => FamilyCreateWithoutMembersInput)
  create!: FamilyCreateWithoutMembersInput;
}
