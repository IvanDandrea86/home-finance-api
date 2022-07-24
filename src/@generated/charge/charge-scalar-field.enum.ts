import { registerEnumType } from '@nestjs/graphql';

export enum ChargeScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  name = 'name',
  updatedAt = 'updatedAt',
  cost = 'cost',
  accountId = 'accountId',
}

registerEnumType(ChargeScalarFieldEnum, {
  name: 'ChargeScalarFieldEnum',
  description: undefined,
});
