<template>
  <div id="itemDetail" v-if="Object.keys(item).length != 0" class="item-detail">
    <div class="item-img">
      <my-swipe emit-name="dImgLoaded" class="detail-banner" :banners="item.swipeImgs"></my-swipe>
    </div>
    <div class="info-wrap">
      <p class="item-title">{{item.title}}</p>
      <div class="item-price">
        <span class="discount-price">¥{{item.highNewPrice}}</span>
        <a v-if="item.discountDesc != ''">
          <span class="price">¥{{item.highPrice}}</span>
          <span :style="{'background-color': item.discountBg}" class="today-discount">{{item.discountDesc}}</span>
        </a>
      </div>
      <div v-if="item.columns" class="item-info">
        <p class="item-sold">{{item.columns[0]}}</p>
        <p class="item-collect">{{item.columns[1]}}</p>
        <p class="item-deliver">{{item.services[item.services.length - 1].name}}</p>
      </div>
      <div class="info-service">
        <div class="service" v-for="index in item.services.length-1">
          <img class="service-icon" :src="item.services[index-1].icon"/>
          <span class="service-title">{{item.services[index-1].name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MySwipe from "@/components/common/swipe/MySwipe";

export default {
  name: "ItemDetail",
  components: {
    MySwipe
  },
  props: {
    item: Object
  },
}
</script>

<style scoped>
  .item-detail {
  }
  .info-wrap {
    padding: 10px;
  }
  .item-title {
    margin-bottom: 10px;
    font-size: 20px;
    color: #2b2a2a;
    font-weight: bolder;
  }
  .detail-banner {
    height: 300px
  }
  .discount-price {
    font-size: 24px;
    letter-spacing: 0.5px;
    color: var(--color-tint);
  }
  .price {
    margin-left: 10px;
    vertical-align: bottom;

    font-size: 15px;
    color: #9a9494;
    text-decoration: line-through;
  }

  .today-discount {
    display: inline-block;
    margin-left: 5px;
    padding: 2px 5px;
    border-radius: 16px;
    vertical-align: top;

    font-size: 14px;
    font-weight: bolder;
    color: #fff;
    background-color: var(--color-tint)
  }

  .item-info {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    color: #9a9494;
  }
  .item-info p {flex: 1}
  .item-info .item-sold {text-align:left}
  .item-info .item-collect{text-align:center}
  .item-info .item-deliver {text-align:right}

  .info-service{
    display: flex;
    padding: 15px 0px;
    margin-top: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
  }

  .service {
    flex-wrap: nowrap;
  }

  .service-icon{
    width: 16px;
    vertical-align: middle;
    margin-bottom: 2px
  }

  .service-title{
    font-size: 14px;
  }
</style>
