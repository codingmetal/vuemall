<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration=2000){
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ""
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9999;
    padding: 10px 15px;
    transform: translate(-50%,-50%);
    background-color: #000000c2;
    color: #fff;
  }
</style>
