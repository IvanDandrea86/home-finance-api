import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { DetailCreateInput } from 'src/@generated/detail/detail-create.input';
import { DetailUpdateInput } from 'src/@generated/detail/detail-update.input';
import { DetailWhereUniqueInput } from 'src/@generated/detail/detail-where-unique.input';
import { FindManyDetailArgs } from 'src/@generated/detail/find-many-detail.args';

@Injectable()
export class DetailService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createDetailInput: DetailCreateInput) {
    return this.prisma.detail.create({
      data: createDetailInput as DetailCreateInput,
    });
  }

  findAll(args: FindManyDetailArgs) {
    return this.prisma.detail.findMany(args);
  }

  findOne(where: DetailWhereUniqueInput) {
    return this.prisma.detail.findUnique({ where });
  }

  update(where: DetailWhereUniqueInput, updateDetailInput: DetailUpdateInput) {
    return this.prisma.detail.update({
      where,
      data: updateDetailInput as Prisma.DetailUpdateInput,
    });
  }

  remove(where: DetailWhereUniqueInput) {
    return this.prisma.detail.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
