<template>
  <div v-if="Object.keys(shop).length != 0" class="shop-detail">
    <div class="shop-name">
      <img @load="imageLoaded" :src="shop.shopLogo"/>
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-wrap">
      <div class="shop-info">
        <div class="goods">
          <p class="number">{{shop.cSells | sellCounts}}</p>
          <p>总销量</p>
        </div>
        <div class="goods">
          <p class="number">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-score">
        <table>
          <tr v-for="item in shop.score" :class="{bad: !item.isBetter}">
            <td><span>{{item.name}}</span>
            <td style="text-align: left"><span>{{item.score}}</span></td>
            <td>
              <span v-if="item.isBetter" class="high">高</span>
              <span v-else class="low">低</span>
            </td>
          </tr>
        </table>

      </div>
    </div>
    <div class="go-wrap">
      <a class="goBtn" :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopDetail",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoaded() {
      this.$bus.$emit('dImgLoaded')
    }
  },
  filters: {
    sellCounts(value) {
      return value>=10000?`${(value/10000).toFixed(1)}万`:value
    }
  },
}
</script>

<style scoped>
  .shop-detail {
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .shop-name {
    padding: 10px 10px
  }
  .shop-name img {
    display: inline-block;
    width: 50px;
    vertical-align: middle;

    border: 1px solid #c0c0c0;
    border-radius: 50px;
  }

  .shop-name span {
    margin-left: 10px;

    color: #3c3c3c;
    font-weight: bolder;
    font-size: 18px;
  }

  .shop-wrap {
    display: flex;
    align-items: center;
    padding: 0px 10px;

    color: #000;
    font-size: 15px;
  }

  .shop-wrap .shop-info {
    flex: 1;
    display: flex;
    justify-content: center;

    text-align: center;
    line-height: 20px;
  }

  .shop-wrap .shop-score {
    flex: 1;
    position: relative;

    color: red
  }

  .shop-wrap .shop-score:before {
    content: "";
    position: absolute;
    transform: translateY(25%);
    left: 0;
    height: 70%;
    border: 1px solid #c0c0c0;
  }

  .shop-wrap .shop-score table {margin: auto;}

  .shop-wrap .shop-score table td {padding: 4px 5px;}

  .shop-wrap .goods {
    margin: 0 10px
  }

  .shop-wrap .goods .number {
    font-size: 20px
  }

  .shop-wrap .shop-info p {
    margin: 5px 0
  }

  .bad {
    color: green!important;
  }

  .high,.low {display: inline-block;color: #fff;font-weight: normal}

  .high {background-color: red}

  .low {background-color: green}

  .go-wrap {
    padding: 30px 0;
    text-align: center;
  }

  .goBtn {
    padding: 10px 40px;
    border-radius: 10px;

    background-color: #eee
  }
</style>
