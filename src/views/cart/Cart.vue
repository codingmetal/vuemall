<template>
  <div id="cart">
    <nav-bar class="cart-navbar">
      <template v-slot:center>购物车({{itemsCount}})</template>
    </nav-bar>
    <div class="cart-list">
      <cart-item :item="item" :index="index" v-for="(item, index) of cartItems"></cart-item>
    </div>

    <div class="btn-group">
      <a :class="{active: isAllPick}" class="all-pick" @click="allPick">
        <i class="all-pick-btn"><img src="~assets/img/cart/select.svg"/></i>全选
      </a>
      <span class="total">合计: ¥{{totalPrice}}</span>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import CartItem from "@/views/cart/childComponents/CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
    NavBar,
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems
    },
    itemsCount() {
      return this.$store.getters.itemsCount
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    isAllPick() {
      return this.$store.getters.isAllPick
    }
  },
  methods: {
    allPick() {
      this.$store.commit("allPick")
    }
  }
}
</script>

<style scoped>
  .cart-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    width: 100%;
  }

  .btn-group {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 10px;

    line-height: 50px;
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
</style>
