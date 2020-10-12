<template>
  <div class="tab-control">
    <ul>
      <li @click="tabClick(index, item.type)" :class="{active: index==currentIndex}" :key="index" v-for="(item, index) of tabList">
        <span :class="{'no-line': isNoLine}">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabList: {
      type: Array,
      default() {
        return []
      },
    },
    isNoLine: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index, type) {
      this.currentIndex = index
      this.$emit('toggleList', type, index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    background-color: #fff;
  }
  .tab-control ul {
    height: 44px;
    display: flex;

    text-align: center;
    font-size: 18px;
    line-height: 44px;
  }

  .tab-control li {
    flex: 1;
  }

  .tab-control li.active span {
    position: relative;
    color: var(--color-tint)
  }

  .tab-control li.active span:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: -15%;
    width: 130%;
    border: 1px solid var(--color-tint)
  }

  .tab-control li.active span.no-line:after {
    display: none;
  }

</style>
