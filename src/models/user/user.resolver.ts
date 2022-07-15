import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { User } from 'src/@generated/user/user.model';
import { IsAuthenticated } from 'src/auth/guards/check.authentication.guard';
import { isAuthorizedGuard } from 'src/auth/guards/chek.authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';

import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // CRUD

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @Roles('ADMIN')
  @UseGuards(isAuthorizedGuard)
  findAll(@Args() args: FindManyUserArgs) {
    return this.userService.findAll(args);
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(
    @Args('where') where: UserWhereUniqueInput,
    include?: Prisma.UserInclude,
  ) {
    return this.userService.findOne(where, include);
  }

  @Mutation(() => User)
  @UseGuards(IsAuthenticated)
  updateUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.userService.update(where, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('where') where: UserWhereUniqueInput) {
    return this.userService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
