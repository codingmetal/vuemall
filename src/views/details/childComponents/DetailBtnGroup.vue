<template>
  <div class="btn-group">
    <div class="light-btn">
      <img src="~assets/img/detail/cs.svg"/>
      <p>客服</p>
    </div>
    <div class="light-btn">
      <img src="~assets/img/detail/shop.svg"/>
      <p>店铺</p>
    </div>
    <div class="light-btn">
      <img v-if="!isCollected" src="~assets/img/detail/collect.svg"/>
      <img v-else src="~assets/img/detail/collect_active.svg"/>
      <p>收藏</p>
    </div>
    <div @click="addCart" class="deep-btn cart-btn">加入购物车</div>
    <div class="deep-btn buy-btn">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBtnGroup",
  data() {
    return {
      isCollected: false
    }
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .btn-group {
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 99;

    background-color: #fff
  }

  .light-btn {
    text-align: center;
    padding: 0 16px;
  }

  .light-btn img {
    width: 24px;
    margin-top: 10px;
  }

  .light-btn p {
    margin-top: -5px;
    font-size: 16px
  }

  .deep-btn {
    flex: 1;
    line-height: 60px;
    text-align: center;
  }

  .deep-btn.cart-btn {
    background-color: #ffdd10;
    color: #000
  }

  .deep-btn.buy-btn {
    background-color: var(--color-tint);
    color: #fff
  }
</style>
