import axios from '@/utils/request.js'

export const login = ({ mobile, code }) => {
  return axios({
    method: 'POST',
    url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
    data: { mobile, code }
  })
}
