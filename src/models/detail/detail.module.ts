import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { DetailResolver } from './detail.resolver';
import { DetailService } from './detail.service';

@Module({
  imports: [PrismaModule],
  providers: [DetailResolver, DetailService],
  exports: [DetailService],
})
export class DetailModule {}
