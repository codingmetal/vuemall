<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <p>VueMall</p>
      </template>
    </nav-bar>
    <tab-control v-show="tabSticky" class="tab-sticky" ref="stickTabControl" @toggleList="toggleList" :tab-list="tabList"></tab-control>
    <scroll @scroll="contentScroll" @moreList="getMoreGoods" ref="sc" class="content">
      <my-swipe emit-name="imgLoaded" :with-link=true :banners="banners"></my-swipe>
      <recommend-list :recommends="recommends"></recommend-list>
      <feature-list></feature-list>
      <tab-control class="home-tab-control"  ref="tabControl" @toggleList="toggleList" :tab-list="tabList"></tab-control>
      <goods-list :showGoods="showGoods"></goods-list>

    </scroll>
    <back-top :isShow="backTopShow" @backTop="backTop"></back-top>
  </div>
</template>

<script>
import HomeRequest from '@/network/home'
import {debounce} from "@/common/util";

import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/common/scroll/BackTop"
import MySwipe from "@/components/common/swipe/MySwipe";
import NavBar from "@/components/common/navBar/NavBar"
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import RecommendList from "@/views/home/childComponents/RecommendList";
import FeatureList from "@/views/home/childComponents/FeatureList";


export default {
  name: "Home",
  components: {
    BackTop,
    Scroll,
    GoodsList,
    TabControl,
    NavBar,
    FeatureList,
    RecommendList,
    MySwipe,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabList: [
        {
          title: '流行',
          type: 'pop'
        },
        {
          title: '新款',
          type: 'new'
        },
        {
          title: '精选',
          type: 'sell'
        },
      ],
      showType: 'pop',
      backTopShow: false,
      goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]},
      },
      stickyOffset: 0,
      tabSticky: false,
      isUpdated: false,
      currentScroll: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.showType].list
    }
  },
  methods: {
    // 网络请求
    getHomeMultiData() {
      HomeRequest.getMultiData()
        .then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list

          // this.$refs.sc.scroll.refresh()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getHomeGoods(type, moreAction) {
      const page = this.goods[type].page + 1
      HomeRequest.getSomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          this.$refs.sc.scroll.refresh()
          if (moreAction != undefined) moreAction()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMoreGoods() {
      this.getHomeGoods(this.showType, () => {
        this.$refs.sc.finishPullUp()
      })

    },

    //组件数据处理
    toggleList(type, index) {
      this.showType = type
      this.$refs.stickTabControl.currentIndex =index
      this.$refs.tabControl.currentIndex = index
    },
    backTop() {
      this.$refs.sc.myScrollTo(0, 0 ,500)
    },
    contentScroll(position) {
      this.backTopShow = position.y < -500

      this.tabSticky = position.y < -this.stickyOffset
    },
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.sc.refreshScroll, 500)
    this.$bus.$on('imgLoaded', () => {
      refresh()
    })
  },
  updated() {
    if (!this.isUpdated) {
      this.isUpdated = true
      this.stickyOffset = this.$refs.tabControl.$el.offsetTop
    }
  },
  destroyed() {
    console.log('home destroyed')
  },
  deactivated() {
    console.log('home deactivated')
    this.currentScroll = this.$refs.sc.getScrollOffset()
  },
  activated() {
    console.log('home activated')
    this.$refs.sc.myScrollTo(0, this.currentScroll, 1)
    this.$refs.sc.refreshScroll()
  }
}

</script>

<style scoped>
  #home {

  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
  }

  .tab-sticky {
    position: relative;
    z-index: 99;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow: hidden;
  }

</style>


