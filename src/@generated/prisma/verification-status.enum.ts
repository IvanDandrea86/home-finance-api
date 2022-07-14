import { registerEnumType } from '@nestjs/graphql';

export enum VerificationStatus {
  NOT_VERIFIED = 'NOT_VERIFIED',
  VERIFIED = 'VERIFIED',
  PENDING = 'PENDING',
}

registerEnumType(VerificationStatus, {
  name: 'VerificationStatus',
  description: undefined,
});
