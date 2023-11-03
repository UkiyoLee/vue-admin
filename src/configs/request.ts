import axios from 'axios';

const request = axios.create({
  // 是否使用模拟数据
  baseURL: 'http://localhost:8102/api/',
  timeout: 10000,
});

/**
 * 请求拦截器(Request Interceptor)
 * 
 * 暂时做默认处理，等待后续增加功能
 */
request.interceptors.request.use(conf => conf, err => Promise.reject(err));

/**
 * 响应拦截器(Response Interceptor)
 */
request.interceptors.response.use(res => res.data ?? undefined, err => Promise.reject(err));

export default request;