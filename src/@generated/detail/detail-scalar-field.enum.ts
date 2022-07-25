import { registerEnumType } from '@nestjs/graphql';

export enum DetailScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    expenseId = "expenseId",
    cost = "cost",
    period = "period",
    userId = "userId"
}


registerEnumType(DetailScalarFieldEnum, { name: 'DetailScalarFieldEnum', description: undefined })
