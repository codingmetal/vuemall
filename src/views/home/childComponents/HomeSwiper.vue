<template>
  <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <swipe-item v-for="banner in banners">
      <a :href="banner.link"><img :src="banner.image"/></a>
    </swipe-item>
  </swipe>
</template>
<script>

import {Swipe, SwipeItem} from 'vant'

export default {
  name: 'HomeSwiper',
  props: {
    banners: Array,
  },
  data() {
    return {

    }
  },
  components: {
    Swipe,
    SwipeItem,
  },
}
</script>
<style scoped>
  .my-swipe img{
    width: 100%;
  }
</style>
