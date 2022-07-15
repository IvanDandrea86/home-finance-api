import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FamilyCreateInput } from 'src/@generated/family/family-create.input';
import { FamilyUpdateInput } from 'src/@generated/family/family-update.input';
import { FamilyWhereUniqueInput } from 'src/@generated/family/family-where-unique.input';
import { Family } from 'src/@generated/family/family.model';
import { FindManyFamilyArgs } from 'src/@generated/family/find-many-family.args';
import { IsAuthenticated } from 'src/auth/guards/check.authentication.guard';
import { isAuthorizedGuard } from 'src/auth/guards/chek.authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';

import { FamilyService } from './family.service';

@Resolver(() => Family)
export class FamilyResolver {
  constructor(private readonly familyService: FamilyService) {}

  // CRUD

  @Mutation(() => Family)
  @UseGuards(IsAuthenticated)
  createFamily(
    @Args('createFamilyInput') createFamilyInput: FamilyCreateInput,
  ) {
    return this.familyService.create(createFamilyInput);
  }

  @Query(() => [Family], { name: 'familys' })
  @Roles('ADMIN')
  @UseGuards(isAuthorizedGuard)
  findAll(@Args() args: FindManyFamilyArgs) {
    return this.familyService.findAll(args);
  }

  @Query(() => Family, { name: 'family', nullable: true })
  @Roles('ADMIN')
  @UseGuards(isAuthorizedGuard)
  findOne(@Args('where') where: FamilyWhereUniqueInput) {
    return this.familyService.findOne(where);
  }

  @Mutation(() => Family)
  @UseGuards(IsAuthenticated)
  updateFamily(
    @Args('where') where: FamilyWhereUniqueInput,
    @Args('updateFamilyInput') updateFamilyInput: FamilyUpdateInput,
  ) {
    return this.familyService.update(where, updateFamilyInput);
  }

  @Mutation(() => Family)
  @Roles('ADMIN')
  @UseGuards(isAuthorizedGuard)
  removeFamily(@Args('where') where: FamilyWhereUniqueInput) {
    return this.familyService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
