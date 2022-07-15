import { registerEnumType } from '@nestjs/graphql';

export enum DetailScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  expenseId = 'expenseId',
  monthlyCost = 'monthlyCost',
  period = 'period',
}

registerEnumType(DetailScalarFieldEnum, {
  name: 'DetailScalarFieldEnum',
  description: undefined,
});
