import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerificationStatus } from './verification-status.enum';

@InputType()
export class EnumVerificationStatusFieldUpdateOperationsInput {

    @Field(() => VerificationStatus, {nullable:true})
    set?: keyof typeof VerificationStatus;
}
