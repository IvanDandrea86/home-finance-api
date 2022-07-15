import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DetailCreateInput } from 'src/@generated/detail/detail-create.input';
import { DetailUpdateInput } from 'src/@generated/detail/detail-update.input';
import { DetailWhereUniqueInput } from 'src/@generated/detail/detail-where-unique.input';
import { Detail } from 'src/@generated/detail/detail.model';
import { FindManyDetailArgs } from 'src/@generated/detail/find-many-detail.args';

import { DetailService } from './detail.service';

@Resolver(() => Detail)
export class DetailResolver {
  constructor(private readonly detailService: DetailService) {}

  // CRUD

  @Mutation(() => Detail)
  createDetail(
    @Args('createDetailInput') createDetailInput: DetailCreateInput,
  ) {
    return this.detailService.create(createDetailInput);
  }

  @Query(() => [Detail], { name: 'details' })
  findAll(@Args() args: FindManyDetailArgs) {
    return this.detailService.findAll(args);
  }

  @Query(() => Detail, { name: 'detail', nullable: true })
  findOne(@Args('where') where: DetailWhereUniqueInput) {
    return this.detailService.findOne(where);
  }

  @Mutation(() => Detail)
  updateDetail(
    @Args('where') where: DetailWhereUniqueInput,
    @Args('updateDetailInput') updateDetailInput: DetailUpdateInput,
  ) {
    return this.detailService.update(where, updateDetailInput);
  }

  @Mutation(() => Detail)
  removeDetail(@Args('where') where: DetailWhereUniqueInput) {
    return this.detailService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
