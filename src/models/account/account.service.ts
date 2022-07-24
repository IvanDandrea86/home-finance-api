import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { AccountCreateInput } from 'src/@generated/account/account-create.input';
import { AccountUpdateInput } from 'src/@generated/account/account-update.input';
import { AccountWhereUniqueInput } from 'src/@generated/account/account-where-unique.input';
import { FindManyAccountArgs } from 'src/@generated/account/find-many-account.args';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createAccountInput: AccountCreateInput) {
    return this.prisma.account.create({
      data: createAccountInput as Prisma.AccountCreateInput,
    });
  }

  async findAll(args: FindManyAccountArgs) {
    return this.prisma.account.findMany({
      ...args,
      include: { charge: true, Expense: true },
    });
  }

  findOne(where: AccountWhereUniqueInput) {
    return this.prisma.account.findUnique({ where });
  }

  update(
    where: AccountWhereUniqueInput,
    updateAccountInput: AccountUpdateInput,
  ) {
    return this.prisma.account.update({
      where,
      data: updateAccountInput as Prisma.AccountUpdateInput,
    });
  }

  remove(where: AccountWhereUniqueInput) {
    return this.prisma.account.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
