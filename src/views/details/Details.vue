<template>
  <div id="detail">
    <nav-bar>
      <template v-slot:left>
        <img @click="back" class="left" src="~assets/img/back.svg"/>
      </template>
      <template v-slot:center>
        <TabControl @toggleList="toggleList" :is-no-line=true :tab-list="tabList"></TabControl>
      </template>
    </nav-bar>
    <scroll :options="options" ref="sc" class="content">
      <item-detail :item="goods"></item-detail>
      <shop-detail :shop="shops"></shop-detail>
      <detail-images :detailInfo="detailInfo"></detail-images>
      <detail-params :item-params="itemParams"></detail-params>
      <detail-comments :comments="comments"></detail-comments>
      <goods-list :show-goods="recommends"></goods-list>
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
        }]
    }
  },
  methods: {
    toggleList(type, index) {
      console.log(`${index}.${type}`)
    },
    back() {
      this.$router.back()
    },
    getLocalTime(date) {
      return new Date(parseInt(date) *1000).toLocaleString()
    }
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
    const refresh = debounce(this.$refs.sc.refreshScroll, 500)
    this.$bus.$on('dImgLoaded', () => {
      refresh()
    })
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
