import { UnauthorizedException, UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { User } from '@prisma/client';
import { AccountCreateInput } from 'src/@generated/account/account-create.input';
import { AccountUpdateInput } from 'src/@generated/account/account-update.input';
import { AccountWhereUniqueInput } from 'src/@generated/account/account-where-unique.input';
import { Account } from 'src/@generated/account/account.model';
import { FindManyAccountArgs } from 'src/@generated/account/find-many-account.args';
import { IsAuthenticated } from 'src/auth/guards/check.authentication.guard';
import { Auth } from 'src/decorator/auth.decorator';
import { CurrentUser } from 'src/decorator/user.decorator';
import { isAdmin, isOwner } from 'src/utils';

import { AccountService } from './account.service';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  // CRUD

  @Mutation(() => Account)
  @UseGuards(IsAuthenticated)
  createAccount(
    @CurrentUser() user: User,
    @Args('createAccountInput') createAccountInput: AccountCreateInput,
  ) {
    if (isAdmin(user)) {
      return this.accountService.create(createAccountInput);
    } else {
      const { Family, ...rest } = createAccountInput;
      return this.accountService.create({
        ...rest,
        Family: { connect: { id: user.familyId } },
      });
    }
  }

  // ADMINLAND
  @Query(() => [Account], { name: 'accounts' })
  // @Auth('ADMIN')
  // @UseGuards(IsAuthenticated)
  findAll(@Args() args: FindManyAccountArgs) {
    return this.accountService.findAll(args);
  }
  @Query(() => Account, { name: 'account', nullable: true })
  @Auth('ADMIN')
  findOne(@Args('where') where: AccountWhereUniqueInput) {
    return this.accountService.findOne(where);
  }

  @Mutation(() => Account)
  // @Auth('ADMIN')
  updateAccount(
    @Args('where') where: AccountWhereUniqueInput,
    @Args('updateAccountInput') updateAccountInput: AccountUpdateInput,
  ) {
    return this.accountService.update(where, updateAccountInput);
  }

  @Mutation(() => Account)
  @Auth('ADMIN')
  removeAccount(@Args('where') where: AccountWhereUniqueInput) {
    return this.accountService.remove(where);
  }

  // USERLAND
  @Query(() => [Account], { name: 'accountsUser' })
  // @UseGuards(IsAuthenticated)
  async findAllUser(@Context() context: any) {
    return this.accountService.findAll({
      where: { familyId: { equals: context.req.user.familyId } },
    });
  }
  @Query(() => Account, { name: 'accountUser', nullable: true })
  @UseGuards(IsAuthenticated)
  async findOneUser(
    @Args('where') where: AccountWhereUniqueInput,
    @CurrentUser() user: User,
  ) {
    if (await isOwner(user, where, this.accountService)) {
      return this.accountService.findOne(where);
    } else throw new UnauthorizedException('Forbidden');
  }

  @Mutation(() => Account)
  @UseGuards(IsAuthenticated)
  async updateAccountUser(
    @CurrentUser() user: User,
    @Args('where') where: AccountWhereUniqueInput,
    @Args('updateAccountInput') updateAccountInput: AccountUpdateInput,
  ) {
    if (await isOwner(user, where, this.accountService)) {
      return this.accountService.update(where, updateAccountInput);
    } else throw new UnauthorizedException('Forbidden');
  }
}
