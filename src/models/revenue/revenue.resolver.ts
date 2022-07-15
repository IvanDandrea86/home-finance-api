import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FindManyRevenueArgs } from 'src/@generated/revenue/find-many-revenue.args';
import { RevenueCreateInput } from 'src/@generated/revenue/revenue-create.input';
import { RevenueUpdateInput } from 'src/@generated/revenue/revenue-update.input';
import { RevenueWhereUniqueInput } from 'src/@generated/revenue/revenue-where-unique.input';
import { Revenue } from 'src/@generated/revenue/revenue.model';
import { IsAuthenticated } from 'src/auth/guards/check.authentication.guard';

import { RevenueService } from './revenue.service';

@Resolver(() => Revenue)
export class RevenueResolver {
  constructor(private readonly revenueService: RevenueService) {}

  // CRUD

  @Mutation(() => Revenue)
  @UseGuards(IsAuthenticated)
  createRevenue(
    @Args('createRevenueInput') createRevenueInput: RevenueCreateInput,
  ) {
    return this.revenueService.create(createRevenueInput);
  }

  @Query(() => [Revenue], { name: 'revenues' })
  @UseGuards(IsAuthenticated)
  findAll(@Args() args: FindManyRevenueArgs) {
    return this.revenueService.findAll(args);
  }

  @Query(() => Revenue, { name: 'revenue', nullable: true })
  @UseGuards(IsAuthenticated)
  findOne(@Args('where') where: RevenueWhereUniqueInput) {
    return this.revenueService.findOne(where);
  }

  @Mutation(() => Revenue)
  @UseGuards(IsAuthenticated)
  updateRevenue(
    @Args('where') where: RevenueWhereUniqueInput,
    @Args('updateRevenueInput') updateRevenueInput: RevenueUpdateInput,
  ) {
    return this.revenueService.update(where, updateRevenueInput);
  }

  @Mutation(() => Revenue)
  @UseGuards(IsAuthenticated)
  removeRevenue(@Args('where') where: RevenueWhereUniqueInput) {
    return this.revenueService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
