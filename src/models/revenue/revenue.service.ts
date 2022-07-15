import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { FindManyRevenueArgs } from 'src/@generated/revenue/find-many-revenue.args';
import { RevenueCreateInput } from 'src/@generated/revenue/revenue-create.input';
import { RevenueUpdateInput } from 'src/@generated/revenue/revenue-update.input';
import { RevenueWhereUniqueInput } from 'src/@generated/revenue/revenue-where-unique.input';

@Injectable()
export class RevenueService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createRevenueInput: RevenueCreateInput) {
    return this.prisma.revenue.create({
      data: createRevenueInput as Prisma.RevenueCreateInput,
    });
  }

  findAll(args: FindManyRevenueArgs) {
    return this.prisma.revenue.findMany(args);
  }

  findOne(where: RevenueWhereUniqueInput) {
    return this.prisma.revenue.findUnique({ where });
  }

  update(
    where: RevenueWhereUniqueInput,
    updateRevenueInput: RevenueUpdateInput,
  ) {
    return this.prisma.revenue.update({
      where,
      data: updateRevenueInput as Prisma.RevenueUpdateInput,
    });
  }

  remove(where: RevenueWhereUniqueInput) {
    return this.prisma.revenue.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
