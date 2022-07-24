import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { User } from '../..//@generated/user/user.model';

@ObjectType()
export class AuthResponse {
  @Field(() => String, { nullable: true })
  message: string;
  @Field(() => String, { nullable: true })
  role: Role;
  @Field(() => User, { nullable: true })
  user: User;
}
@ObjectType()
export class AuthError extends Error {
  @Field(() => String, { nullable: true })
  message: string;
  @Field(() => String, { nullable: true })
  emailErrorMessage: string;
  @Field(() => String, { nullable: true })
  upasswordErrorMessage: string;
}
