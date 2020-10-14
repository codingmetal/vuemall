<template>
  <div @click="toggleCheck(index)"  class="item">
    <div  class="left">
      <div :class="{active: item.isChecked}" class="check">
        <img v-if="item.isChecked" src="~assets/img/cart/select.svg"/>
      </div>
    </div>
    <div class="center">
      <img :src="item.img"/>
    </div>
    <div class="right">
      <div class="title">
        {{item.title}}
      </div>
      <p class="desc">{{item.desc}}</p>

      <div class="bottom">
        <span class="price">¥{{item.price}}</span>

        <a class="amount" @click.stop="decreaseAmount(index)">
          <span>-</span>
        </a>
        <span class="x-amount">X{{item.amount}}</span>
        <a class="amount" @click.stop="increaseAmount(index)">
          <span>+</span>
        </a>
        <a class="remove" @click.stop="remove(index)">移除</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    index: Number
  },
  methods: {
    toggleCheck(index) {
      this.$store.commit('toggleCheck', index)
    },
    increaseAmount(index) {
      this.$store.commit('increaseAmount', index)
    },
    decreaseAmount(index) {
      this.$store.commit('decreaseAmount', index)
    },
    remove(index) {
      this.$store.commit('removeItem', index)
    }
  },
}
</script>

<style scoped>
  .item {
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #c6c6c6;
  }

  .left {
    width: 20px;
    align-self: center;
  }

  .active.check {
    background-color: var(--color-tint);
    border: none;
  }

  .check img {
    position: absolute;
    width: 100%;
    top:0;
    left: 0;
  }
  .check {
    position: relative;
    z-index: -1;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .center {
    margin: 0 10px
  }
  .center img {
    width: 80px;
    height: 100px
  }
  .right {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  .right .title {
    color: #000;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .right .desc {
    width: 100%;
    color: #666666;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .right .bottom {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .right .price {
    color: red;
    font-weight: bolder;

    margin-right: 10px
  }
  .right .x-amount {
    color: #666
  }
  .right .amount {
    display: inline-block;
    width: 30px;
    margin: 0 5px;
    text-align: center;
    background-color: #fff;
    border: 1px solid var(--color-tint);
    color: var(--color-tint);
    border-radius: 30px;
  }
  .right .remove {
    float: right;
    color: var(--color-tint);
  }

</style>
