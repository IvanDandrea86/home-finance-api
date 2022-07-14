import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { FamilyCreateInput } from 'src/@generated/family/family-create.input';
import { FamilyUpdateInput } from 'src/@generated/family/family-update.input';
import { FamilyWhereUniqueInput } from 'src/@generated/family/family-where-unique.input';
import { FindManyFamilyArgs } from 'src/@generated/family/find-many-family.args';

type NewType = FindManyFamilyArgs;

@Injectable()
export class FamilyService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createFamilyInput: FamilyCreateInput) {
    return this.prisma.family.create({
      data: createFamilyInput as Prisma.FamilyCreateInput,
    });
  }

  findAll(args: NewType) {
    return this.prisma.family.findMany(args);
  }

  findOne(where: FamilyWhereUniqueInput) {
    return this.prisma.family.findUnique({ where });
  }

  update(where: FamilyWhereUniqueInput, updateFamilyInput: FamilyUpdateInput) {
    return this.prisma.family.update({
      where,
      data: updateFamilyInput as Prisma.FamilyUpdateInput,
    });
  }

  remove(where: FamilyWhereUniqueInput) {
    return this.prisma.family.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
