import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../services/prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createUserInput: UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput as Prisma.UserCreateInput,
    });
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(where: UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where });
  }

  update(where: UserWhereUniqueInput, updateUserInput: UserUpdateInput) {
    return this.prisma.user.update({
      where,
      data: updateUserInput as Prisma.UserUpdateInput,
    });
  }

  remove(where: UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
