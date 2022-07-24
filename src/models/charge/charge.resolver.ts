import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChargeCreateInput } from 'src/@generated/charge/charge-create.input';
import { ChargeUpdateInput } from 'src/@generated/charge/charge-update.input';
import { ChargeWhereUniqueInput } from 'src/@generated/charge/charge-where-unique.input';
import { Charge } from 'src/@generated/charge/charge.model';
import { FindManyChargeArgs } from 'src/@generated/charge/find-many-charge.args';

import { ChargeService } from './charge.service';

@Resolver(() => Charge)
export class ChargeResolver {
  constructor(private readonly chargeService: ChargeService) {}

  // CRUD

  @Mutation(() => Charge)
  createCharge(
    @Args('createChargeInput') createChargeInput: ChargeCreateInput,
  ) {
    return this.chargeService.create(createChargeInput);
  }

  @Query(() => [Charge], { name: 'charges' })
  findAll(@Args() args: FindManyChargeArgs) {
    return this.chargeService.findAll(args);
  }

  @Query(() => Charge, { name: 'charge', nullable: true })
  findOne(@Args('where') where: ChargeWhereUniqueInput) {
    return this.chargeService.findOne(where);
  }

  @Mutation(() => Charge)
  updateCharge(
    @Args('where') where: ChargeWhereUniqueInput,
    @Args('updateChargeInput') updateChargeInput: ChargeUpdateInput,
  ) {
    return this.chargeService.update(where, updateChargeInput);
  }

  @Mutation(() => Charge)
  removeCharge(@Args('where') where: ChargeWhereUniqueInput) {
    return this.chargeService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
