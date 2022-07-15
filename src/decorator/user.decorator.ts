import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User, Permission } from '@prisma/client';

export const CurrentUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const user: User & { Permission: Permission } = ctx.getContext().req.user;
    return data ? user[data] : user;
  },
);
