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
    <detail-btn-group></detail-btn-group>
  </div>
</template>

<script>
import {getItemDetail,getRecommend, Goods, Shops} from "@/network/detail";
import {debounce} from "@/common/util";

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
    }
  },
  methods: {
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
      console.log('get offset')
      this.tabOffset = [0]
      this.tabOffset.push(this.$refs.detailParams.$el.offsetTop)
      this.tabOffset.push(this.$refs.detailComments.$el.offsetTop)
      this.tabOffset.push(this.$refs.recommends.$el.offsetTop)
    },
    contentScroll(position) {
      let y = -(position.y)
      if (y >= this.tabOffset[0] && y < this.tabOffset[1] && this.currentIndex != 0) {
        this.currentIndex = 0;
        this.$refs.tc.currentIndex = 0;
        console.log(0)
      } else if(y >= this.tabOffset[1] && y < this.tabOffset[2] && this.currentIndex != 1) {
        this.currentIndex = 1;
        this.$refs.tc.currentIndex = 1;

        console.log(1)
      } else if(y >= this.tabOffset[2] && y < this.tabOffset[3] && this.currentIndex != 2) {
        this.currentIndex = 2;
        this.$refs.tc.currentIndex = 2;
        console.log(2)
      } else if (y >= this.tabOffset[3] && this.currentIndex != 3){
        this.currentIndex = 3;
        this.$refs.tc.currentIndex = 3;
        console.log(3)
      }
    },
  },
  created() {
    getItemDetail(this.$route.params.iid)
      .then(res => {
        let data = res.result
        this.item = res
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shops = new Shops(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.itemParams = data.itemParams
        if (data.rate.cRate != 0) {
          this.comments = data.rate.list[0];
        }
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
    const refresh = debounce(this.$refs.sc.refreshScroll, 300)

    this.$bus.$on('dImgLoaded', () => {
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
