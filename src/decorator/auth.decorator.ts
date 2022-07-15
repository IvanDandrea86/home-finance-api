import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';
import { IsAuthenticated } from 'src/auth/guards/check.authentication.guard';
import { isAuthorized } from 'src/auth/guards/chek.authorization.guard';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(IsAuthenticated, isAuthorized),
  );
}
