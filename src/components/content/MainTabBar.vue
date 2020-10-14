<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home">
      <template v-slot:img>
        <img class="bar-icon" src="~assets/img/tabbar/home.svg"/>
      </template>
      <template v-slot:activeImg>
        <img class="bar-icon" src="~assets/img/tabbar/home_active.svg"/>
      </template>
      <template v-slot:text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:img>
        <img class="bar-icon" src="~assets/img/tabbar/category.svg"/>
      </template>
      <template v-slot:activeImg>
        <img class="bar-icon" src="~assets/img/tabbar/category_active.svg"/>
      </template>
      <template v-slot:text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:img>
        <img class="bar-icon" src="~assets/img/tabbar/cart.svg"/>
      </template>
      <template v-slot:activeImg>
        <img class="bar-icon" src="~assets/img/tabbar/cart_active.svg"/>
      </template>
      <template v-slot:text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:img>
        <img class="bar-icon" src="~assets/img/tabbar/profile.svg"/>
      </template>
      <template v-slot:activeImg>
        <img class="bar-icon" src="~assets/img/tabbar/profile_active.svg"/>
      </template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
import TabBarItem from "@/components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>
  .tab-bar {
    color: #000;
  }
</style>
