import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { FamilyResolver } from './family.resolver';
import { FamilyService } from './family.service';

@Module({
  imports: [PrismaModule],
  providers: [FamilyResolver, FamilyService],
  exports: [FamilyService],
})
export class FamilyModule {}
