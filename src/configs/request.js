import axios from 'axios'

const baseURL = "/api"

// 创建axios实例
const request = axios.create({
  baseURL,
  withCredentials: true
  // 一些默认的header头配置
  // headers: {'Authorization': localStorage.getItem('token')?localStorage.getItem('token'):''}
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // let headers = {
  //   Authorization: getCookie('token') ? getCookie('token') : "",
  // };
  // if (config.headers) {
  //   config.headers = Object.assign({}, headers, config.headers);
  // } else {
  //   config.headers = headers;
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error);
  // Notify('程序异常，请联系客服');
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { status, data } = response;
  if (status === 200 && data.err_code === 0) {
    return Promise.resolve(data.data);
  } else {
    return Promise.reject(response);
  }
}, function (error, a) {
  const { status } = error.response;
  if(status === 502){
    console.error('服务器更新中，请稍后再试！');
    return Promise.reject(status);
  }
  if(error){
    console.error(error.response && error.response.data ? error.response.data : '网络异常');
  }
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request