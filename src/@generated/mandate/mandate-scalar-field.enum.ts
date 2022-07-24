import { registerEnumType } from '@nestjs/graphql';

export enum MandateScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  status = 'status',
  userId = 'userId',
}

registerEnumType(MandateScalarFieldEnum, {
  name: 'MandateScalarFieldEnum',
  description: undefined,
});
