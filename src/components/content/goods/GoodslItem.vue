<template>
  <div @click="jump" class="goods-item">
    <img @load="imageLoad" :src="ShowImg" alt=""/>
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
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("home") != -1) {
        this.$bus.$emit("imgLoaded")
      }
      else if (this.$route.path.indexOf("detail") != -1) {
        this.$bus.$emit("dImgLoaded")
      }
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
