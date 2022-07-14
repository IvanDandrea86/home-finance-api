import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorator/user.decorator';

import { AuthService } from './auth.service';

import { COOKIENAME, ONEDAY, __prod__ } from '../constants';
import { UserService } from '../models/user/user.service';

import { GqlAuthGuard } from './guards/gql.auth.guard';
import { User } from '../@generated/user/user.model';
import { AuthResponse } from './dto/auth.output';
import { AuthInput } from './dto/auth.input';
import { SessionLocalAuthGuard } from './guards/session.auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => AuthResponse)
  @UseGuards(GqlAuthGuard, SessionLocalAuthGuard)
  login(@Args('authInput') authInput: AuthInput, @Context() { req, res }) {
    return this.authService.login(req.user);
  }

  @Query(() => User, { nullable: true })
  whoAmI(@CurrentUser() user: User | null) {
    if (user) {
      return this.userService.findOne({ id: user.id });
    }
    return null;
  }

  @Mutation(() => AuthResponse, { nullable: true })
  async logout(@Context() { req, res }) {
    // await req.logOut(async () => {
    //   await req.session.destroy();
    // });
    // await res.clearCookie(COOKIENAME);
    // return this.authService.logout(req.user);
    await req.session.destroy();
    await res.clearCookie(COOKIENAME);
    return this.authService.logout(req.user);
  }
}
