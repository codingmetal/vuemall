import {debounce} from "@/common/util";

export const imgListenerMixin = {
  //图片加载监听
  mounted() {
    console.log("Mixin")
    console.log(this.$refs.sc)
    const refresh = debounce(this.$refs.sc.refreshScroll, 500)
    this.$bus.$on('imgLoaded', () => {
      refresh()
    })
  }
}
