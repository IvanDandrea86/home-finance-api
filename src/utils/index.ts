import { Role } from '@prisma/client';

export const matchRoles = (authRoles: Role[], userRole: Role) => {
  return authRoles.includes(userRole);
};
