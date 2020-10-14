<template>
  <div id="detail">
    <nav-bar>
      <template v-slot:left>
        <img @click="back" class="left" src="~assets/img/back.svg"/>
      </template>
      <template v-slot:center>
        <TabControl ref="tc" @toggleList="toggleList" :is-no-line=true :tab-list="tabList"></TabControl>
      </template>
    </nav-bar>
    <scroll @scroll="contentScroll" :options="options" ref="sc" class="content">
      <item-detail :item="goods"></item-detail>
      <shop-detail :shop="shops"></shop-detail>
      <detail-images :detailInfo="detailInfo"></detail-images>
      <detail-params ref="detailParams" :item-params="itemParams"></detail-params>
      <detail-comments ref="detailComments" :comments="comments"></detail-comments>
      <goods-list ref="recommends" :show-goods="recommends"></goods-list>
    </scroll>
    <back-top :isShow="backTopShow" @backTop="backTop"></back-top>
    <detail-btn-group @addCart="addCart"></detail-btn-group>
  </div>
</template>

<script>
import {getItemDetail,getRecommend, Goods, Shops} from "@/network/detail";
import {debounce} from "@/common/util";
import {backTop} from "@/common/mixin";

import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";
import ItemDetail from "@/views/details/childComponents/ItemDetail";
import ShopDetail from "@/views/details/childComponents/ShopDetail";
import DetailImages from "@/views/details/childComponents/DetailImages";
import DetailParams from "@/views/details/childComponents/DetailParams";
import DetailBtnGroup from "@/views/details/childComponents/DetailBtnGroup";
import DetailComments from "@/views/details/childComponents/DetailComments";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Details",
  components: {
    NavBar,
    DetailBtnGroup,
    Scroll,
    TabControl,
    ItemDetail,
    ShopDetail,
    DetailImages,
    DetailParams,
    DetailComments,
    GoodsList,
  },
  data() {
    return {
      options: {
        click: true,
        probeType: 1,
        pullUpLoad: true
      },
      item: {},
      goods: {},
      shops: {},
      detailInfo: {},
      itemParams: {},
      comments:{},
      recommends: [],
      currentIndex: 0,
      tabList: [
        {
          title: '商品',
          type: 'item'
        },
        {
          title: '参数',
          type: 'param'
        },
        {
          title: '评论',
          type: 'comment'
        },
        {
          title: '推荐',
          type: 'recommend'
        }],
      tabOffset: [],
      cartItem: {}
    }
  },
  mixins: [backTop],
  methods: {
    addCart() {
      const item = {
        iid: this.cartItem.iid,
        img: this.cartItem.img,
        title: this.cartItem.title,
        price: this.cartItem.price,
        desc: this.cartItem.desc,
      }
      this.$store.commit('addCart', item)
    },
    toggleList(type, index) {
      this.scrollTo(-(this.tabOffset[index]), 500)
    },
    back() {
      this.$router.back()
    },
    scrollTo(y, time) {
      this.$refs.sc.myScrollTo(0, y, time)
    },
    getTabOffset() {
      if (this.$refs.detailParams) {
        this.tabOffset = [0]
        this.tabOffset.push(this.$refs.detailParams.$el.offsetTop)
        this.tabOffset.push(this.$refs.detailComments.$el.offsetTop)
        this.tabOffset.push(this.$refs.recommends.$el.offsetTop)
      }
    },
    contentScroll(position) {
      this.backTopShow = position.y < -500

      let y = -(position.y)
      if (y >= this.tabOffset[0] && y < this.tabOffset[1] && this.currentIndex != 0) {
        this.currentIndex = 0;
        this.$refs.tc.currentIndex = 0;
      } else if(y >= this.tabOffset[1] && y < this.tabOffset[2] && this.currentIndex != 1) {
        this.currentIndex = 1;
        this.$refs.tc.currentIndex = 1;
      } else if(y >= this.tabOffset[2] && y < this.tabOffset[3] && this.currentIndex != 2) {
        this.currentIndex = 2;
        this.$refs.tc.currentIndex = 2;
      } else if (y >= this.tabOffset[3] && this.currentIndex != 3){
        this.currentIndex = 3;
        this.$refs.tc.currentIndex = 3;
      }
    },
    getData(data) {
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shops = new Shops(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      if (data.rate.cRate != 0) {
        this.comments = data.rate.list[0];
      }

      let iteminfo = data.itemInfo
      this.cartItem = {
        iid: iteminfo.iid,
        img: iteminfo.topImages[0],
        title: iteminfo.title,
        price: iteminfo.highNowPrice,
        desc: iteminfo.desc,
      }
    }
  },
  created() {
    getItemDetail(this.$route.params.iid)
      .then(res => {
        this.getData(res.result)
      })
      .catch(err => {
        console.log(err)
      })

    getRecommend()
      .then(res => {
        this.recommends = res.data.list
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted() {
    const refresh = debounce(this.$refs.sc.refreshScroll, 100)

    this.$bus.$on('imgLoaded', () => {
      refresh(this.getTabOffset)
    })
  },
  destroyed() {
    //实例销毁时记得销毁$bus!!!!!!!!
    this.$bus.$off()
  }
}

</script>

<style scoped>
  #detail {
    /*position: relative;*/
    /*height: 100vh;*/
    /*z-index: 99;*/
    /*background-color: #fff*/
  }
  .left {
    width: 20px;
    vertical-align: middle;
    margin-left: 10px
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0;

    overflow: hidden;
  }
</style>
