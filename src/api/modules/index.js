/**
 * 命名 => API_xxx_methodName
 */
import { request } from '@/api/request.js'

export default {
  // 获取首页列表信息
  API_LIST_POST(data = {}) {
    return request({
      url: '/api/marketing-mix-web-server-test/v1/audit/getAuditList',
      method: 'post',
      data
    })
  }
}
