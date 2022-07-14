import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../models/user/user.module';
import { SessionSerializer } from './session.serializer';
import { PermissionModule } from 'src/models/permission/permission.module';

@Module({
  imports: [
    PassportModule.register({ session: true, defaultStrategy: 'local' }),
    UserModule,
    PermissionModule,
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
