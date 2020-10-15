<template>
  <div class="profile-list">
    <ul>
      <li v-for="item in list" class="item">
        <img :src="item.img"/><span class="text">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileList",
  props: {
    list: Array
  }
}
</script>

<style scoped>
  .profile-list li {
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    color: #000
  }
  .item img {
    height: 30px;
    vertical-align: middle;
  }

  .item .text {
    margin-left: 10px;
    vertical-align: middle;
  }
</style>
