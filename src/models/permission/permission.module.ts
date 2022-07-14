import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';

@Module({
  imports: [PrismaModule],
  providers: [PermissionResolver, PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
