<template>
  <div id="cart">
    <nav-bar class="cart-navbar">
      <template v-slot:center>购物车({{itemsCount}})</template>
    </nav-bar>
    <scroll ref="sc" class="cart-list">
      <div>
        <cart-item :item="item" :index="index" v-for="(item, index) of cartItems"></cart-item>
      </div>
    </scroll>

    <div class="btn-group">
      <a :class="{active: isAllPick}" class="all-pick" @click="allPick">
        <i class="all-pick-btn"><img src="~assets/img/cart/select.svg"/></i>全选
      </a>
      <span class="total">合计: ¥{{totalPrice}}</span>

      <a @click="calc" class="pay">
        <span>去结算：({{pickedCount}})</span>
      </a>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import CartItem from "@/views/cart/childComponents/CartItem";
import {mapGetters} from 'vuex'
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Cart",
  components: {
    Scroll,
    CartItem,
    NavBar,
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems
    },
    ...mapGetters(['itemsCount','totalPrice','isAllPick','pickedCount'])
  },
  methods: {
    allPick() {
      this.$store.commit("allPick")
    },
    calc() {
      if (!this.isAllPick) {
        this.$toast.show('请选择要结算的商品')
      }
    },
  },
  activated() {
    this.$refs.sc.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .cart-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 94px;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
  }

  .btn-group {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 45px;
    padding: 0 10px;

    line-height: 45px;
    background-color: #eee
  }

  .all-pick-btn {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #ccc;
    border-radius: 18px;
    vertical-align: middle;
    margin-right: 4px;
    margin-bottom: 3px
  }

  .all-pick.active .all-pick-btn {
    background-color: var(--color-tint)
  }

  .all-pick-btn img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .total {
    color: red
  }

  .pay {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    background-color: var(--color-tint);
    padding: 0 10px;
    color: #fff
  }
</style>
