import type { UserVO } from "./user";

export interface DeleteRequest {
  id?: number;
}

export interface PageInfo {
  current: number;
  size: number;
  total: number;
  records: [];
}

export interface PageRequest {
  current?: number;
  pageSize?: number;
  sortOrder: 'ascend' | 'descend';
  sortField?: string;
}

export interface BaseResponse <T> {
  code?: number;
  message?: string;
  data?: T;
}

export interface InitialState {
  loginUser?: UserVO;
}