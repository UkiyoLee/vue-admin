import type { PageRequest } from "./global";

type UserGender = 'MALE' | 'FEMALE' | 'SECRET';

export interface UserInfo {
  id?: number;
  username?: string;
  account?: string;
  avatar?: string;
  gender?: UserGender;
  email?: string;
  role?: number;
  password?: number;
  createTime?: Date;
  updateTime?: Date;
  deleted?: boolean;
}

export interface UserVO {
  id?: number;
  username?: string;
  account?: string;
  avatar?: string;
  role?: number;
  gender?: UserGender;
  email?: string;
  createTime?: Date;
  updateTime?: Date;
}

export interface UserRegisterRequest {
  username?: string;
  account?: string;
  password?: string;
  checkPassword?: string;
}

export interface UserLoginRequest {
  account?: string;
  password?: string;
}

export interface UserAddRequest {
  username?: string;
  account?: string;
  avatar?: string;
  gender?: UserGender;
  email?: string;
  role?: number;
  password?: number;
}

export interface UserDeleteRequest {
  id?: number;
}

export interface UserUpdateRequest {
  id?: number;
  username?: string;
  account?: string;
  avatar?: string;
  gender?: UserGender;
  email?: string;
  role?: number;
}

export interface UserQueryRequest extends PageRequest {
  id?: number;
  username?: string;
  account?: string;
  avatar?: string;
  gender?: UserGender;
  email?: string;
  role?: number;
  password?: number;
}