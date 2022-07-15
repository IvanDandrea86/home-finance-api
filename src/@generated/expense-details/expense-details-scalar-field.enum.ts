import { registerEnumType } from '@nestjs/graphql';

export enum ExpenseDetailsScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  expenseId = 'expenseId',
  monthlyCost = 'monthlyCost',
}

registerEnumType(ExpenseDetailsScalarFieldEnum, {
  name: 'ExpenseDetailsScalarFieldEnum',
  description: undefined,
});
