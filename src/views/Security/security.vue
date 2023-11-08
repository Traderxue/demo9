<script setup>
import { showToast } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};

const resetPwd = ()=>{
    showToast("重置成功,请重新登录 ")
    router.push("/login")
}
</script>

<template>
  <div class="security">
    <div class="top">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back_ios
      </span>
      <span>重置密码</span><span></span>
    </div>
    <div class="box">
        <input type="text" placeholder="请输入旧密码">
        <input type="text" placeholder="请输入新密码">
        <button @click="resetPwd">重置密码</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.security {
  width: auto;
  height: auto;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .box{
    padding-top: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    input{
        width: 60%;
        height: 30px;
        margin: 10px 0px;
        padding-left: 15px;
        color: #666;
        font-size: 14px;
        outline: none;
    }
    button{
        width: 30%;
        height: 35px;
        margin-top: 20px;
        border: 0;
        background: #364f6b;
        color: #FFF;
        font-size: 13px;
        border-radius: 3px;
    }
  }
}
</style>