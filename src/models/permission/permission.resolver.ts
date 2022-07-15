import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FindManyPermissionArgs } from 'src/@generated/permission/find-many-permission.args';
import { PermissionCreateInput } from 'src/@generated/permission/permission-create.input';
import { PermissionUpdateInput } from 'src/@generated/permission/permission-update.input';
import { PermissionWhereUniqueInput } from 'src/@generated/permission/permission-where-unique.input';
import { Permission } from 'src/@generated/permission/permission.model';
import { Auth } from 'src/decorator/auth.decorator';

import { PermissionService } from './permission.service';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  // CRUD

  @Mutation(() => Permission)
  @Auth('ADMIN')
  createPermission(
    @Args('createPermissionInput') createPermissionInput: PermissionCreateInput,
  ) {
    return this.permissionService.create(createPermissionInput);
  }

  @Query(() => [Permission], { name: 'permissions' })
  @Auth('ADMIN')
  findAll(@Args() args: FindManyPermissionArgs) {
    return this.permissionService.findAll(args);
  }

  @Query(() => Permission, { name: 'permission', nullable: true })
  @Auth('ADMIN')
  findOne(@Args('where') where: PermissionWhereUniqueInput) {
    return this.permissionService.findOne(where);
  }

  @Mutation(() => Permission)
  @Auth('ADMIN')
  updatePermission(
    @Args('where') where: PermissionWhereUniqueInput,
    @Args('updatePermissionInput') updatePermissionInput: PermissionUpdateInput,
  ) {
    return this.permissionService.update(where, updatePermissionInput);
  }

  @Mutation(() => Permission)
  @Auth('ADMIN')
  removePermission(@Args('where') where: PermissionWhereUniqueInput) {
    return this.permissionService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
