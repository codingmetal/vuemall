<template>
  <div @click="jump" class="goods-item">
    <img @load="imageLoad"  :src="goodsItem.show.img" alt=""/>
    <p class="title">{{goodsItem.title}}</p>
    <p class="ps"><span class="price">{{goodsItem.orgPrice}}</span>&nbsp&nbsp&nbsp<span>☆{{goodsItem.cfav}}</span></p>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type:  Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imgLoaded");
    },
    jump() {
      this.$router.push({path: `detail/${this.goodsItem.iid}`})
    }
  }
}
</script>

<style scoped>
  .goods-item {
    width: 50%;
    padding: 3px;
    /*break-inside: avoid;*/
    font-size: 12px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 3px
  }
  .goods-item .title {
  }
  .goods-item .ps {
    text-align: center
  }
  .goods-item .ps .price {
    color: var(--color-tint)
  }
</style>
