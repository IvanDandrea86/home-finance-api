import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ExpenseCreateInput } from 'src/@generated/expense/expense-create.input';
import { ExpenseUpdateInput } from 'src/@generated/expense/expense-update.input';
import { ExpenseWhereUniqueInput } from 'src/@generated/expense/expense-where-unique.input';
import { FindManyExpenseArgs } from 'src/@generated/expense/find-many-expense.args';

@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createExpenseInput: ExpenseCreateInput) {
    return this.prisma.expense.create({
      data: createExpenseInput as Prisma.ExpenseCreateInput,
    });
  }

  findAll(args: FindManyExpenseArgs) {
    return this.prisma.expense.findMany(args);
  }

  findOne(where: ExpenseWhereUniqueInput) {
    return this.prisma.expense.findUnique({ where });
  }

  update(
    where: ExpenseWhereUniqueInput,
    updateExpenseInput: ExpenseUpdateInput,
  ) {
    return this.prisma.expense.update({
      where,
      data: updateExpenseInput as Prisma.ExpenseUpdateInput,
    });
  }

  remove(where: ExpenseWhereUniqueInput) {
    return this.prisma.expense.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
