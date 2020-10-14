<template>
  <div @click="jump" class="goods-item">
    <img @load="imageLoad" v-lazy="ShowImg" alt=""/>
    <p class="title">{{goodsItem.title}}</p>
    <p class="ps"><span class="price">¥{{goodsItem.price}}</span>&nbsp&nbsp&nbsp<span>☆{{goodsItem.cfav}}</span></p>
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
  computed: {
    ShowImg() {
      if (this.goodsItem.img) {
        return this.goodsItem.img
      } else if (this.goodsItem.image) {
        return this.goodsItem.image
      } else {
        return this.goodsItem.show.img
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imgLoaded")
    },
    jump() {
      if (this.goodsItem.iid) {
        this.$router.push({path: `/detail/${this.goodsItem.iid}`})
      }
      if (this.goodsItem.item_id) {
        this.$router.push({path: `/detail/${this.goodsItem.item_id}`})
      }
    },
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
