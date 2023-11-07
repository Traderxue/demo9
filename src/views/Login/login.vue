<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const register = () => {
  router.push("/register");
};

const goBack = () =>{
    router.push("/home")
}

const login = ()=>{
  router.push("/home")
}
</script>

<template>
  <div class="login">
    <div class="box">
      <h3>登录</h3>
      <input type="text" placeholder="请输入用户名" />
      <input placeholder="请输入密码" type="password"/>
      <div class="btn">
        <button @click="login">登录</button><button @click="register">注册</button>
      </div>
      <div class="tab">
        <span @click="goBack">返回首页</span><span>忘记密码?</span>
      </div>
    </div>
    <!-- <span>忘记密码？</span> -->
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: auto;
  height: auto;
  background: #f5f5f5;
  .box {
    width: auto;
    height: 260px;
    margin-top: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: relative;
    h3 {
      font-size: 22px;
    }
    input {
      height: 35px;
      width: 60%;
      padding-left: 15px;
      font-size: 14px;
      color: #666;
      :focus {
        outline: none;
      }
    }
    .btn {
      display: flex;
      justify-content: space-around;
      button {
        width: 70px;
        height: 35px;
        border: 0;
        margin: 0px 25px;
        background: #364f6b;
        font-size: 13px;
        border-radius: 3px;
        color: #fff;
      }
    }
  }
  .tab{
    display: flex;
    span{
        margin: 0px 65px;
        font-size: 13px;
    }
  }
}
</style>

