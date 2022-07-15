import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  password = 'password',
  validationToken = 'validationToken',
  lastLogin = 'lastLogin',
  verificationStatus = 'verificationStatus',
  familyId = 'familyId',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
