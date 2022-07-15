import { registerEnumType } from '@nestjs/graphql';

export enum AccountType {
  SAVING = 'SAVING',
  EXPENSE = 'EXPENSE',
}

registerEnumType(AccountType, { name: 'AccountType', description: undefined });
