<template>
  <div :class="{hide: !isShow}" @click="backTop" class="back-top">
    <img src="~assets/img/backtop/backtop.svg"/>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    backTop() {
      console.log("backtop")
      this.$emit('backTop')
    }
  }
}
</script>

<style scoped>
  .back-top {
    position: absolute;
    bottom: 70px;
    right: 10px;
    padding: 10px;
    border-radius: 50px;
    background-color: #ff8198cc;

    transition: opacity 0.3s ease;
    transform: translateZ(99px);
  }

  .back-top img {
    width: 30px;
    vertical-align: middle;
  }

  .hide {
    opacity: 0;
  }
</style>
