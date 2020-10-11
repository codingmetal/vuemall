<template>
  <div>我是详情</div>
</template>

<script>
import {getItemDetail} from "@/network/detail";

export default {
  name: "Details",
  data() {
    return {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  },
  created() {
    getItemDetail(this.$route.params.iid)
      .then(res => {
        this.item = res
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
