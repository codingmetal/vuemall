<template>
  <swipe class="my-swipe" :stop-propagation="false" :autoplay="3000" indicator-color="white">
    <swipe-item :key="index" v-for="(banner, index) of banners">
      <a v-if="withLink" :href="banner.link"><img @load="imgLoaded" :src="banner.image"/></a>
      <img v-else :src="banner" @load="imgLoaded"/>
    </swipe-item>
  </swipe>
</template>
<script>

import {Swipe, SwipeItem} from 'vant'

export default {
  name: 'MySwipe',
  props: {
    banners: Array,
    withLink: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {

    }
  },
  components: {
    Swipe,
    SwipeItem,
  },
  methods: {
    imgLoaded() {
      this.$bus.$emit('imgLoaded')
    }
  }
}
</script>
<style scoped>
  .my-swipe img{
    width: 100%;
  }
</style>
