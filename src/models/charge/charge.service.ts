import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ChargeCreateInput } from 'src/@generated/charge/charge-create.input';
import { ChargeUpdateInput } from 'src/@generated/charge/charge-update.input';
import { ChargeWhereUniqueInput } from 'src/@generated/charge/charge-where-unique.input';
import { FindManyChargeArgs } from 'src/@generated/charge/find-many-charge.args';

@Injectable()
export class ChargeService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createChargeInput: ChargeCreateInput) {
    return this.prisma.charge.create({
      data: createChargeInput as Prisma.ChargeCreateInput,
    });
  }

  findAll(args: FindManyChargeArgs) {
    return this.prisma.charge.findMany(args);
  }

  findOne(where: ChargeWhereUniqueInput) {
    return this.prisma.charge.findUnique({ where });
  }

  update(where: ChargeWhereUniqueInput, updateChargeInput: ChargeUpdateInput) {
    return this.prisma.charge.update({
      where,
      data: updateChargeInput as Prisma.ChargeUpdateInput,
    });
  }

  remove(where: ChargeWhereUniqueInput) {
    return this.prisma.charge.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
