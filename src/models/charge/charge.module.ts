import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { ChargeResolver } from './charge.resolver';
import { ChargeService } from './charge.service';

@Module({
  imports: [PrismaModule],
  providers: [ChargeResolver, ChargeService],
  exports: [ChargeService],
})
export class ChargeModule {}
