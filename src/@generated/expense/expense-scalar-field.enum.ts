import { registerEnumType } from '@nestjs/graphql';

export enum ExpenseScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  monthlyCost = 'monthlyCost',
  familyId = 'familyId',
  accountId = 'accountId',
}

registerEnumType(ExpenseScalarFieldEnum, {
  name: 'ExpenseScalarFieldEnum',
  description: undefined,
});
