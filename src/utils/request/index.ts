import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HRequestConfig } from './type'

class HRequest {
  instance: AxiosInstance

  // request实例 => axios的实例
  constructor(config: HRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      },
    )

    // 针对特定的HRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn as any,
      config.interceptors?.requestFailureFn,
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn,
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: HRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
      // console.log(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: HRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
  put<T = any>(config: HRequestConfig<T>) {
    return this.request({ ...config, method: 'PUT' })
  }
}

export default HRequest
