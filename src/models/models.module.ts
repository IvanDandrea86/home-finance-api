import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { FamilyModule } from './family/family.module';

import { RevenueModule } from './revenue/revenue.module';
import { ExpenseModule } from './expense/expense.module';
import { AccountModule } from './account/account.module';
import { DetailModule } from './detail/detail.module';

@Module({
  imports: [
    DetailModule,
    AccountModule,
    ExpenseModule,
    RevenueModule,
    FamilyModule,
    PermissionModule,
    UserModule,
  ],
  exports: [
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
