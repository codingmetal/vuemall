import {request} from '@/network/request'

const itemDetailUrl = "/detail"

export function getItemDetail(iid) {
  return request({
    url: itemDetailUrl,
    method: 'get',
    params: {
      iid
    }
  })
}
