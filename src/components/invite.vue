<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { showToast } from 'vant';
import useClipboard from "vue-clipboard3"

const {toClipboard} = useClipboard()

const router = useRouter();

const inviteLink = ref('https://example.com/6413')
const inviteNum = ref('6413')

const goBack = () => {
  router.back();
};

const copyInviteLink = async () =>{
  await toClipboard(inviteLink.value);
  showToast('复制成功');
}
const copyInviteNum = async () =>{
  await toClipboard(inviteNum.value);
  showToast('复制成功');
}
</script>

<template>
  <div class="invite">
    <div class="position">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack">
          arrow_back_ios
        </span>
        <span>邀请好友</span><span></span>
      </div>
      <div class="banner">
        <img src="http://127.0.0.1:5173/invite_friends.png" alt="" />
      </div>
      <div class="invite_friend">
        <div>
          <span>邀请码</span>
          <span>{{inviteNum}}</span>
          <span class="material-symbols-outlined copy" @click="copyInviteNum"> file_copy </span>
        </div>
        <div>
          <span>我的邀请链接</span>
          <span>{{inviteLink}}</span>
          <span class="material-symbols-outlined copy" @click="copyInviteLink"> file_copy </span>
        </div>
        <div>
          <button @click="copyInviteLink">
            立即邀请好友
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invite {
  width: auto;
  height: auto;
  padding-bottom: 15px 15px 70px 15px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
  }
  .banner {
    width: auto;
    height: 190px;
    background: #e23e57;
    position: relative;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .invite_friend {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 40px;
    font-size: 14px;
    height: 240px;
    div {
      display: flex;
      justify-content: space-between;
      padding: 15px 10px;
      .copy {
        font-size: 18px;
      }
      button {
        width: 80%;
        height: 35px;
        margin: 0 auto;
        border: 0;
        border-radius: 3px;
        background: #364f6b;
        color: #fff;
      }
    }
  }
}
</style>