import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PermissionService } from 'src/models/permission/permission.service';
import { User } from '../@generated/user/user.model';
import { UserService } from '../models/user/user.service';

class EnhanceError implements Error {
  message: string;
  name: string;
  cause: string;
  constructor(message: string, name: string, cause: string) {
    this.message = message;
    this.name = name;
    this.cause = cause;
  }
}

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(
      {
        email: email,
      },
      { Permission: true },
    );
    if (!user) {
      throw new NotFoundException('email', 'Email not found');
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (passwordIsValid) return user;
    else throw new BadGatewayException('password', 'Bad passowrd');
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
