<template>
  <div class="recommend-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "RecommendItem"
}
</script>

<style scoped>

.recommend-list .recommend-item {
  flex: 1;
  padding: 10px 10px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bolder;
}
</style>
