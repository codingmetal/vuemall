<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="detail border-bottom">
    <div class="detail-text">
      <div class="start"></div>
      <p>{{detailInfo.desc}}</p>
      <p>{{detailInfo.detailImage[0].desc}}</p>

      <div class="clear">
        <div class="end"></div>
      </div>

      <p>{{detailInfo.detailImage[0].key}}</p>
    </div>
    <div v-for="image in detailInfo.detailImage[0].list" class="images-item">
      <img @load="imageLoaded" :src="image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImages",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoaded() {
      this.$bus.$emit('imgLoaded')
    }
  }
}
</script>

<style scoped>
.detail {
  padding-top: 10px;
}
.images-item img {
  width: 100%;
}
.detail-text {
  padding: 10px
}

.start {
  position: relative;
  width: 7px;
  height: 7px;
  margin: 5px 0 15px;
  background-color: #000
}

.start:before {
  content: "";
  position: absolute;
  border: 2px solid #eee;
  width: 100px;
  left: 7px;
  bottom: 0;
}

.end {
  position: relative;
  width: 7px;
  height: 7px;
  float: right;
  margin: 15px 0 5px;
  background-color: #000;
}

.end:before {
  content: "";
  position: absolute;
  border: 2px solid #eee;
  width: 100px;
  right: 7px;
  bottom: 0;
}

.clear:after {
  content:".";
  display:block;
  height:0;
  visibility:hidden;
  clear:both;
}
</style>
