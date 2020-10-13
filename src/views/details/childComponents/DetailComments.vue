<template>
  <div id="detailComment" class="detail-comments border-bottom">
    <div class="comment-title">
      <p>用户评价</p>
      <a>更多</a>
    </div>
    <div v-if="Object.keys(comments)!=0">
      <div class="comment-content">
        <div class="comment-user">
          <img :src="comments.user.avatar"/><span>{{comments.user.uname}}</span>
        </div>
        <p class="comment">{{comments.content}}</p>
        <p class="comment-info">
          <span class="comment-time">{{comments.created | getLocalTime}}</span>
          <span>{{comments.style}}</span>
        </p>
        <div v-if="comments.images != null" class="comment-img">
          <img v-for="image in comments.images" :src="image"/>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px" v-else><p>暂无评论</p></div>
  </div>
</template>

<script>
export default {
  name: "DetailComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    getLocalTime(date) {
      return new Date(parseInt(date) *1000).toLocaleString()
    }
  }
}
</script>

<style scoped>
  .detail-comments {
    padding: 10px 15px 30px
  }

  .comment-title {
    height: 50px;
    border-bottom: 1px solid #cbcbcb
  }

  .comment-title p {
    float: left;
    height: 50px;
    line-height: 50px;
  }

  .comment-title a {
    display: inline-block;
    float: right;
    height: 50px;
    line-height: 50px;
  }

  .comment-user {
    margin-top: 10px
  }

  .comment-user img {
    width: 40px;
    vertical-align: middle;
  }

  .comment-user span {
    margin-left: 10px
  }

  .comment {
    margin: 10px 0;
  }

  .comment-time {
    margin-right: 5px
  }

  .comment-info {
    font-size: 14px;
    color: #9a9494
  }

  .comment-img img {
    display: inline-block;
    height: 60px;
    margin-right: 5px
  }
</style>
