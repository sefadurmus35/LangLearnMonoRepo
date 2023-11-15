import { UserEntity } from '@app/shared';
import { LoginDTO } from '../dtos/login.dto';

import { RegisterDTO } from '../dtos/register.dto';

export interface AuthServiceInterface {
  getUsers(): Promise<UserEntity[]>;
  getUserById(id: number): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  findById(id: number): Promise<UserEntity>;
  hashPassword(password: string): Promise<string>;
  register(newUser: Readonly<RegisterDTO>): Promise<UserEntity>;
  doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean>;
  validateUser(email: string, password: string): Promise<UserEntity>;
  login(existingUser: Readonly<LoginDTO>): Promise<{
    token: string;
    user: UserEntity;
  }>;
  verifyJwt(jwt: string): Promise<{ user: UserEntity; exp: number }>;
}
