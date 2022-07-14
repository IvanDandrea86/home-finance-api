import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { FamilyModule } from './family/family.module';

@Module({
  imports: [FamilyModule, PermissionModule, UserModule],
  exports: [FamilyModule, PermissionModule, UserModule],
})
export class ModelsModule {}
