<template>
  <div :style="activeStyle" class="bar-item" @click="jump">
    <template v-if="!isActive">
      <slot name="img"></slot>
    </template>
    <template v-else>
      <slot name="activeImg"></slot>
    </template>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default() {
        return '#ff8198'
      }
    },
  },
  computed: {
    isActive() {
      return (this.$route.path.indexOf(this.path) != -1)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    jump() {
      this.$router.push(this.path).catch(err => {})
    }
  },
};
</script>

<style scoped>
  .tab-bar .bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 16px
  }

  .tab-bar img {
    width: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
