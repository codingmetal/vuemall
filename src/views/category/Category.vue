<template>
  <div id="category">
    <NavBar class="categroy-navbar">
      <template v-slot:center>
        <p>商品分类</p>
      </template>
    </NavBar>
    <div class="main-content">
      <category-left-side class="left-content" @categoryClick="categoryClick" :categories="categories"></category-left-side>

      <scroll ref="rsc" class="right-content" :options="scrollOptions">
        <category-right-side @loaded="imgLoaded" :sub-categories="subCategories">
        <template>
          <tab-control ref="tc" @toggleList="toggleList" :tab-list="tabList"></tab-control>
          <goods-list :show-goods="categoryList"></goods-list>
        </template>
        </category-right-side>
      </scroll>
    </div>
  </div>

</template>

<script>
import {getCategory, getSubcategory, getCategoryDetail} from "@/network/category";
import {debounce} from "@/common/util";

import NavBar from "@/components/common/navBar/NavBar";
import CategoryLeftSide from "@/views/category/childComponents/CategoryLeftSide";
import CategoryRightSide from "@/views/category/childComponents/CategoryRightSide";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Category",
  components: {Scroll, GoodsList, TabControl, CategoryRightSide, CategoryLeftSide, NavBar},
  data() {
    return {
      categories: [],
      subCategories: [],
      categoryList: [],
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
      currentType: 'pop',
      currentCategoryIndex: 0,
      scrollOptions: {
        pullUpLoad: true,
        probeType: 1,
        click: true
      }
    }
  },
  computed: {
    debounceRefresh() {
        return debounce(this.refresh, 100)
    }
  },
  methods: {
    categoryClick(index) {
      this.currentCategoryIndex = index
      this.currentType = this.tabList[0].type
      this.$refs.tc.currentIndex = 0
      this._getSubcategory()
      this._getCategoryDetail()
    },
    toggleList(type, index) {
      this.currentType = type;
      this._getCategoryDetail()
    },
    initCategory() {
      getCategory()
        .then(res => {
          this.categories = res.data.category.list
          this._getSubcategory()
          this._getCategoryDetail()
        })
        .catch(err => console.log(err))
    },
    //网络请求封装
    _getSubcategory() {
      getSubcategory(this.categories[this.currentCategoryIndex].maitKey)
        .then(res => this.subCategories = res.data.list)
        .catch(err => console.log(err))
    },
    _getCategoryDetail() {
      getCategoryDetail(this.categories[this.currentCategoryIndex].miniWallkey, this.currentType)
        .then(res => this.categoryList = res)
        .catch(err => console.log(err))
    },
    refresh() {
      console.log("refresh")
      this.$refs.rsc.scroll.refresh()
    },
    _refresh() {
      debounce(this.refresh, 500)
    },
    imgLoaded() {
      this.debounceRefresh()
    }
  },
  created() {
    this.initCategory();
  },
  mounted() {
    this.$bus.$on('imgLoaded', () => {
      this.debounceRefresh()
    })
  },
  activated() {
    this.$bus.$on('imgLoaded', () => {
      this.debounceRefresh()
    })
  },
  deactivated() {
    this.$bus.$off()
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .main-content {
    display: flex;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .categroy-navbar {
    position: relative;
    z-index: 99;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
  }

  .left-content {
    flex: 0;
    height: 100%;
    flex-basis: 90px;
    background-color: #f6f6f6;

    text-align: center;
    font-size: 14px;
  }

  .right-content {
    flex: 1;
    height: 100%;
  }
</style>
