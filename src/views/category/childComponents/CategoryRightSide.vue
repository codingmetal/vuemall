<template>
  <div class="right-side">
    <div class="content" v-if="subCategories.length != 0">
      <div v-for="item in subCategories" class="item">
        <a :href="item.link">
          <img @load="loaded" :src="item.image"/>
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryRightSide",
  props: {
    subCategories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    loaded() {
      this.$emit('loaded')
    }
  }
}
</script>

<style scoped>

  .right-side .content {
    display: flex;
    flex-wrap: wrap;

    padding: 10px 0 ;
  }

  .right-side .content .item {
    width: 33%;
    text-align: center;
    padding: 15px
  }

  .right-side .content .item img {
    width: 100%;
  }

  .right-side .content .item p {
    margin: 10px 0;
    font-size: 14px
  }
</style>
