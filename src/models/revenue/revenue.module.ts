import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { RevenueResolver } from './revenue.resolver';
import { RevenueService } from './revenue.service';

@Module({
  imports: [PrismaModule],
  providers: [RevenueResolver, RevenueService],
  exports: [RevenueService],
})
export class RevenueModule {}
