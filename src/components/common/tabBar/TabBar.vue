<template>
  <ul class="tab-bar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TabBar",
  props: {
  }
}
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    display: flex;
    background-color: #eee;

    box-shadow: 0px -2px 1px rgba(100,100,100,0.1);
  }
</style>
