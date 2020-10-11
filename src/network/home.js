import {request} from "@/network/request";

const multiDataUrl = '/home/multidata' ;
const homeGoodsUrl = 'home/data'

export default {
  getMultiData() {
    return request({
      url: multiDataUrl
    })
  },

  getSomeGoods(type, page) {
    return request({
      url: homeGoodsUrl,
      params: {
        type,
        page
      }
    })
  }
}
