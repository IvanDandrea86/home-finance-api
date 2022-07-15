import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Permission } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { COOKIENAME } from 'src/constants';
import { PermissionService } from 'src/models/permission/permission.service';
import { User } from '../@generated/user/user.model';
import { UserService } from '../models/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private permissionService: PermissionService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(
      {
        email: email,
      },
      { permission: true },
    );
    if (!user) {
      throw new NotFoundException('constant.EMAIL_NOT_FOUND');
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    console.log(passwordIsValid);
    if (passwordIsValid) return user;
    else throw new BadGatewayException('constant.PROVIDED_WRONG_PASSWORD');
  }

  async login(user: User) {
    return {
      message: 'logged in!',
      user: user,
    };
  }
  async logout(user: User) {
    return {
      message: 'logout!',
      user: user,
    };
  }
}
