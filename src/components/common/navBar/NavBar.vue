<template>
  <div class="nav">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
  .nav {
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0 3px 2px rgba(100,100,100,0.1);
  }

  .nav-left {
    width: 60px;
  }

  .nav-right {
    width: 60px;
  }

  .nav-center {
    flex: 1;
    text-align: center;
  }
</style>
