import request from "@/configs/request";
import type { BaseResponse, PageRequest } from "@/models/global";
import type { UserLoginRequest, UserQueryRequest, UserRegisterRequest, UserVO } from "@/models/user";

/**
 * 用户注册
 * @param params 
 * @returns 
 */
export async function userRegister(params: UserRegisterRequest) {
  return request.post<BaseResponse<number>>("/user/register", {
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}

/**
 * 用户登录
 * @param params 
 * @returns 
 */
export async function userLogin(params: UserLoginRequest) {
  return request.post<BaseResponse<string>>('/user/login', {
    data: params,
  });
}
/// region 增删改查

export async function listUserByPage() {
  return request.get<BaseResponse<UserQueryRequest>>('/user/list', {
    data: {}
  });
}

export async function getUserById(id: number) {
  return request.get<BaseResponse<UserVO>>('/user/getById', {
    params: { id },
  });
}

/// endregion

/**
 * 用户注销
 * @returns 
 */
export async function userLogout() {
  return request.post<BaseResponse<boolean>>('/user/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {}
  });
}

/**
 * 获取登录用户
 * @returns 
 */
export async function getLoginUser() {
  return request.get<BaseResponse<UserVO>>('/user/get/login', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}