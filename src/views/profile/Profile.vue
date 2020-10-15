<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <p>我的</p>
      </template>
    </nav-bar>
    <profile-info></profile-info>
    <div class="account-info border-bottom">
      <div class="account-box border-none">
        <p><span class="number">0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div class="account-box">
        <p><span class="number">0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div class="account-box">
        <p><span class="number">0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
    <profile-list :list="listData"></profile-list>
  </div>
</template>

<script>
import ProfileList from "@/views/profile/childComponents/ProfileList"
import ProfileInfo from "@/views/profile/childComponents/ProfileInfo";
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "Profile",
  components: {NavBar, ProfileInfo, ProfileList},
  data() {
    return {
      listData: [
        {text: '我的消息',img: require('@/assets/img/profile/message.svg')},
        {text: '积分商城',img: require('@/assets/img/profile/store.svg')},
        {text: '会员卡',img: require('@/assets/img/profile/card.svg')}
      ],
    }
  }
}
</script>

<style scoped>
  .profile .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }

  .account-info {
    display: flex;
    font-size: 16px;
  }

  .account-box {
    flex: 1;
    text-align: center;
    padding: 20px;
    border-left: 1px solid #eee
  }

  .border-none {
    border: none
  }

  .account-box .number {
    color: red;
    font-size: 24px;
  }
</style>
