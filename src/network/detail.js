import {request} from '@/network/request'

const itemDetailUrl = "/detail"
const recommendUrl = "/recommend"

export function getItemDetail(iid) {
  return request({
    url: itemDetailUrl,
    method: 'get',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: recommendUrl,
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.highNewPrice = itemInfo.highNowPrice
    this.highPrice = itemInfo.highPrice
    this.columns = columns
    this.services = services
    this.discountDesc = itemInfo.discountDesc
    this.discountBg = itemInfo.discountBgColor
    this.swipeImgs = itemInfo.topImages
  }
}

export class Shops {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.cFans = shopInfo.cFans
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.score = shopInfo.score

  }
}
