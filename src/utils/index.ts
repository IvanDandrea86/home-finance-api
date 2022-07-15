import { Permission, Role } from '@prisma/client';
import { User } from 'src/@generated/user/user.model';
import { Extended } from 'src/types/generics';

export const matchRoles = (authRoles: Role[], userRole: Role) => {
  return authRoles.includes(userRole);
};

export const isOwner = async (user: User, where: any, service: any) => {
  const { id } = where;
  const elemets = await service.findAll({
    where: { familyId: { equals: user.familyId } },
  });
  const ids = elemets.map((elem: any) => elem.id);
  return ids.includes(id);
};

export const isAdmin = (user: User) => {
  return user.Permission.type === 'ADMIN';
};
