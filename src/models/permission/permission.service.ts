import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PermissionCreateInput } from 'src/@generated/permission/permission-create.input';
import { FindManyPermissionArgs } from 'src/@generated/permission/find-many-permission.args';
import { PermissionUpdateInput } from 'src/@generated/permission/permission-update.input';
import { PermissionWhereUniqueInput } from 'src/@generated/permission/permission-where-unique.input';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createPermissionInput: PermissionCreateInput) {
    return this.prisma.permission.create({
      data: createPermissionInput as Prisma.PermissionCreateInput,
    });
  }

  findAll(args: FindManyPermissionArgs) {
    return this.prisma.permission.findMany(args);
  }

  findOne(where: PermissionWhereUniqueInput) {
    return this.prisma.permission.findUnique({ where });
  }

  update(
    where: PermissionWhereUniqueInput,
    updatePermissionInput: PermissionUpdateInput,
  ) {
    return this.prisma.permission.update({
      where,
      data: updatePermissionInput as Prisma.PermissionUpdateInput,
    });
  }

  remove(where: PermissionWhereUniqueInput) {
    return this.prisma.permission.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
