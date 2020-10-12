<template>
  <div class="goods-list">
    <goods-item :goods-item="item" :key="item.acm + index" v-for="(item, index) in showGoods"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodslItem";

export default {
  name: "GoodsList",
  props: {
    showGoods: Array
  },
  components: {
    GoodsItem,
  },
}
</script>

<style scoped>
  /*.goods-list {*/
  /*  column-count: 2;*/
  /*  column-gap: 0;*/
  /*}*/

  .goods-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
