import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ExpenseCreateInput } from 'src/@generated/expense/expense-create.input';
import { ExpenseUpdateInput } from 'src/@generated/expense/expense-update.input';
import { ExpenseWhereUniqueInput } from 'src/@generated/expense/expense-where-unique.input';
import { Expense } from 'src/@generated/expense/expense.model';
import { FindManyExpenseArgs } from 'src/@generated/expense/find-many-expense.args';

import { ExpenseService } from './expense.service';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  // CRUD

  @Mutation(() => Expense)
  createExpense(
    @Args('createExpenseInput') createExpenseInput: ExpenseCreateInput,
  ) {
    return this.expenseService.create(createExpenseInput);
  }

  @Query(() => [Expense], { name: 'expenses' })
  findAll(@Args() args: FindManyExpenseArgs) {
    return this.expenseService.findAll(args);
  }

  @Query(() => Expense, { name: 'expense', nullable: true })
  findOne(@Args('where') where: ExpenseWhereUniqueInput) {
    return this.expenseService.findOne(where);
  }

  @Mutation(() => Expense)
  updateExpense(
    @Args('where') where: ExpenseWhereUniqueInput,
    @Args('updateExpenseInput') updateExpenseInput: ExpenseUpdateInput,
  ) {
    return this.expenseService.update(where, updateExpenseInput);
  }

  @Mutation(() => Expense)
  removeExpense(@Args('where') where: ExpenseWhereUniqueInput) {
    return this.expenseService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
