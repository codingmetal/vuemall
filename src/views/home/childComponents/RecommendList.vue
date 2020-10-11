<template>
  <div class="recommend-list">
    <recommend-item v-for="recommend in recommends">
      <a :href="recommend.link">
        <img :src="recommend.image"/>
        <p>{{recommend.title}}</p>
      </a>
    </recommend-item>

  </div>
</template>

<script>
import RecommendItem from "@/views/home/childComponents/RecommendItem";

export default {
  name: "RecommendList",
  props: {
    recommends: Array
  },
  components: {
    RecommendItem
  },
}
</script>

<style scoped>
  .recommend-list {
    display: flex;
    color: #666;
    border-bottom: 10px solid #eee
  }

  .recommend-list .recommend-item img {
    width: 100%;
  }

</style>
