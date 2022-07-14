import { Prisma } from '@prisma/client';

export default async function (
  params: Prisma.MiddlewareParams,
  next: (params: Prisma.MiddlewareParams) => Promise<any>,
) {
  const bcrypt = await require('bcrypt');
  //Middleware from Prisma.create for encrypt password
  if (params.action == 'create' && params.model == 'User') {
    const user = params.args.data;
    const hasPassword = Object.hasOwnProperty.bind(user)('password');
    //Encrypt password if exist password args
    if (hasPassword) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      params.args.data = user;
    }
  }
  //Middleware from Prisma.update for encrypt password
  if (params.action == 'update' && params.model == 'User') {
    const user = params.args.data;
    //Encrypt password if exist password args
    const hasPassword = Object.hasOwnProperty.bind(user)('password');
    if (hasPassword) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password.set, salt);
      user.password = hash;
      params.args.data = user;
    }
  }
  return await next(params);
}
