import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  type = 'type',
}

registerEnumType(PermissionScalarFieldEnum, {
  name: 'PermissionScalarFieldEnum',
  description: undefined,
});
