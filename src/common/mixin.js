// import {debounce} from "@/common/util";
import BackTop from "@/components/common/scroll/BackTop";

const BACK_POSITION = 500
// export const imgListenerMixin = {
//   //图片加载监听
//   mounted() {
//     const refresh = debounce(this.$refs.sc.refreshScroll, 500)
//     this.$bus.$on('imgLoaded', () => {
//       refresh()
//     })
//   }
// }

export const backTop = {
  data() {
    return {
      backTopShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.sc.myScrollTo(0, 0 ,BACK_POSITION)
    }
  }
}
