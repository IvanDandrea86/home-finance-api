import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { FamilyModule } from './family/family.module';

import { RevenueModule } from './revenue/revenue.module';
import { ExpenseModule } from './expense/expense.module';
import { AccountModule } from './account/account.module';
import { DetailModule } from './detail/detail.module';
import { ChargeModule } from './charge/charge.module';

@Module({
  imports: [
    ChargeModule,
    DetailModule,
    AccountModule,
    ExpenseModule,
    RevenueModule,
    FamilyModule,
    PermissionModule,
    UserModule,
  ],
  exports: [
    ChargeModule,
    DetailModule,
    AccountModule,
    ExpenseModule,
    RevenueModule,
    FamilyModule,
    PermissionModule,
    UserModule,
  ],
})
export class ModelsModule {}
