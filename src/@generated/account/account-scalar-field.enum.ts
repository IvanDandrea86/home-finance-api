import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    type = "type",
    updatedAt = "updatedAt",
    name = "name",
    monthlyBudget = "monthlyBudget",
    sold = "sold",
    familyId = "familyId"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
