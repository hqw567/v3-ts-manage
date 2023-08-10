import HRequest from '@/utils/request'

const hRequest = new HRequest({
  baseURL: '/api',
  timeout: 30000,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('单次请求成功拦截')
      return config
    },
  },
})

export default hRequest
