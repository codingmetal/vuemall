<template>
  <scroll ref="lsc" :options="scrollOptions">
    <div class="left-side">
      <ul v-if="categories.length != 0">
        <li @click="itemClick(index)" :class="{active: index == currentMaitKeyIndex}" :key="item.maitKey" v-for="(item, index) in categories">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryLeftSide",
  components: {Scroll},
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentMaitKeyIndex: 0,
      scrollOptions: {
        pullUpLoad: true,
        probeType: 1,
        click: true
      }
    }
  },
  methods: {
    itemClick(index) {
      if (index != this.currentMaitKeyIndex) {
        this.currentMaitKeyIndex = index;
        this.$emit('categoryClick', index)
      }
    },
    updateScroll() {
      this.$refs.lsc.scroll.refresh()
    }
  },
  mounted() {
  },
  updated() {
    console.log('updated')
    this.updateScroll()
  }
}
</script>

<style scoped>

  .left-side li{
    padding: 15px 0
  }

  .left-side li.active {
    border-left: 3px solid var(--color-tint);
    background-color: #fff;
    color: var(--color-tint);
    font-weight: bolder;
  }
</style>
