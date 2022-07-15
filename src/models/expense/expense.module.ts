import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { ExpenseResolver } from './expense.resolver';
import { ExpenseService } from './expense.service';

@Module({
  imports: [PrismaModule],
  providers: [ExpenseResolver, ExpenseService],
  exports: [ExpenseService],
})
export class ExpenseModule {}
