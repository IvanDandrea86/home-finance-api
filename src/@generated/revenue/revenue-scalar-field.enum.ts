import { registerEnumType } from '@nestjs/graphql';

export enum RevenueScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  familyId = 'familyId',
}

registerEnumType(RevenueScalarFieldEnum, {
  name: 'RevenueScalarFieldEnum',
  description: undefined,
});
