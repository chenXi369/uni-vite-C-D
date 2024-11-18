import { service } from './service'

function createRequest(service) {
  function request(config) {
    // config 自定义配置
    // axios默认配置
    const configDefault = {

      // #ifdef H5
      baseURL: import.meta.env.VITE_APP_API_BASEURL, // 所有通过此配置的基础地址 在.env文件配置
      // #endif
      // #ifndef H5
      baseURL: 'https://markettest.gree.com',
      // #endif
      timeout: 20000, // 请求超时时间
      responseType: 'json', // 响应类型
      headers: {
        // 请求头配置...
        contentType: 'application/json;charset=UTF-8'
      }
    }

    configDefault.headers.Authorization = 'BearereyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6bnVsbCwiYXVkIjpbIm1zZyIsInVwbXMtbG9nLXNlcnZlci10ZXN0IiwibWVtYmVyLW1hbmFnZXItc2VydmVyLXRlc3QiLCJtYXJrZXRpbmctbWl4LXByb2R1Y3QtdGVzdCIsIm1lbWJlci1jdXN0b20tc2VydmVyLXRlc3QiLCJncmVldXBtc2F1dGgiLCJ1cG1zLW1hbmFnZXItdGVzdCIsIm1hcmtldGluZy1taXgtb3JkZXItdGVzdCIsIm1hcmtldGluZy1taXgtcmVwb3J0LXRlc3QiLCJtYXJrZXRpbmctbWl4LXdlYi1zZXJ2ZXItZGV2IiwibWVtYmVyLWNlbnRlci1zZXJ2ZXItdGVzdCIsImZpbGUtdGVzdCIsImZpbGUtc2VydmljZS10ZXN0IiwibWFya2V0aW5nLW1peC1wYXktdGVzdCIsIm1hcmtldGluZy1taXgtd2ViLXNlcnZlci10ZXN0IiwiZXhwb3J0LXJlcG9ydC1zZXJ2ZXItdGVzdCIsIm1hcmtldGluZy1taXgtbWluaWFwcC10ZXN0IiwibWFya2V0aW5nLW1peC1pbnZlbnRvcnktdGVzdCIsIm1hcmtldGluZy1taXgtdGVzdCIsInVwbXMtbWFuYWdlci1kZXYiLCJ0YWctdGVzdCIsInByb2R1Y3QtY2VudGVyLXRlc3QiLCJtc2ctdGVzdCIsImN1c3RvbS10ZXN0IiwicHJvZHVjdC1jZW50ZXItZGV2IiwiYXVkaXQtdGVzdCIsIm1hcmtldGluZy1taXgtc2hvcHBpbmctY2FydC10ZXN0IiwibWFya2V0aW5nLW1peC13ZWItdGVzdCIsInN0b3JlaG91c2UtY2VudGVyLXRlc3QiLCJtZXNzYWdlLWNlbnRlci10ZXN0IiwiaW52b2ljaW5nLW1peC10ZXN0IiwiYXVkaXQtY2VudGVyLXRlc3QiLCJtZW1iZXItb3JkZXItc2VydmVyLXRlc3QiLCJtYXJrZXRpbmctbWl4LXN0cmVhbS1jb21tdW5pY2F0aW9uIiwicmVjZWlwdHMtY2VudGVyLXRlc3QiLCJzZWFyY2gtY2VudGVyLXByb3ZpZGVyLXRlc3QiLCJtYXJrZXRpbmctbWl4LWRhdGEiLCJpbnZlbnRvcnktY2VudGVyLXRlc3QiLCJvcGVyYXRpb25zLXNlcnZlci10ZXN0Iiwic2FsZXMtaW52b2ljaW5nLXRlc3QiXSwidXNlcl90eXBlIjpudWxsLCJ1c2VyX2lkIjoiZDdkYzQzMmItYTg5Ny00ZDhmLTlhNDUtM2RiMjQ2ZGVkYzc2IiwicGhvbmUiOiIxMzM0NTY3ODkxMSIsInVzZXJfbmFtZSI6ImZ3czEyMyIsInNjb3BlIjpbImRlZmF1bHQiXSwicmVhbF9uYW1lIjoi5p2O5bCaIiwiZXhwIjoxNzMzMDM0Mjk1LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiZGI4NzZjODItODI3ZS00YzNjLWE2NTAtMWFhMDc4ZDhiMDk5IiwiY2xpZW50X2lkIjoiYmQyZjc1ZmYxZDIzY2U5YjIyMmFhMzc2MGY2Y2YyNjIifQ.PAXNDLDzZPJxZoOZahn4xpofws-kwQTIn8wZ75AlwYkenAwIO_6VmWGdgj2_u80Bz6umIXohLFv1YvFVcA4i_vTLmhA_q4sBnaXFjEgvtseFfUOELFcbJIrhWMvt-3F1xMOr0NEr05k7l8h6CVTPLctzlT8w-mTGNGttoCr2FB7wjbXyv3q61Q85iPuwQaNWNHKCAf76TAg8wuEIMD2Al_7LNc77xPVoyalslZC5aoTC0cMUB6mxtkC1oghfXB87F5pkJUMCER00i_k4io2LcNSpxYXlDuqy54FUMv-NNQMTsMRaKQxBEEzS1M9rGzwW--NiufZpcq46DXb5mdFVaA'
    const requestConfig = Object.assign(configDefault, config)
    return service(requestConfig)
  }
  return request
}

export const request = createRequest(service)
