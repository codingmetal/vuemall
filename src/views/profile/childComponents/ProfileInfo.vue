<template>
  <div class="profile-info">
    <div class="info-top">
      <div class="avatar">
        <slot name="user-avatar">
          <img src="~assets/img/profile/default-avatar.svg"/>
        </slot>
      </div>
      <div class="info">
        <slot name="user-name">
          <p>登录/注册</p>
        </slot>
        <p><img src="~assets/img/profile/phone.svg"/>
          <slot>
            暂无绑定手机号
          </slot>
        </p>
        <img class="arrow-right" src="~assets/img/profile/arrow-right.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
}
</script>

<style scoped>
  .info-top {
    display: flex;
    background-color: var(--color-tint);
    padding: 20px;
  }

  .avatar {

  }

  .info {
    flex: 1;
    position: relative;
    margin-left: 10px;
    color: #fff;
    padding-top: 5px;
  }
  .info img {
    width: 20px;
    vertical-align: middle;
    margin: 0 -5px
  }
  .info p{
    margin:5px 0
  }
  .info .arrow-right {
    position: absolute;
    top: 22px;
    right: 0;
    float: right;
    z-index: 1;
  }
  .avatar img {
    width: 60px;
  }
</style>
