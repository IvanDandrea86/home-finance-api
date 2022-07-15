import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [PrismaModule],
  providers: [AccountResolver, AccountService],
  exports: [AccountService],
})
export class AccountModule {}
