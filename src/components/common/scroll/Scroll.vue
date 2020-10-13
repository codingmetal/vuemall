<template>
  <div class="scroll-wrap" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    options: {
      type: Object,
      default() {
        return {
          pullUpLoad: true,
          probeType: 3,
          click: true
        }
      }
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, this.options)

      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('moreList')
      })
    },
    refreshScroll(extraAction) {
      //添加自定义行为
      if(extraAction) extraAction()
      this.scroll && this.scroll.refresh()
      console.log("refresh")
    },
    myScrollTo(x, y, time) {
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollOffset() {
      return this.scroll.y
    }
  },
  mounted: function () {
    this.initScroll()
  }
}
</script>

<style scoped>
  .scroll-wrap {
    position: relative;

    /*移动端动画会导致z-index失效,通过transform修改z-index的值*/
    transform: translateZ(-2px);
  }
</style>
