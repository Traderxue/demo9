<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="auth">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
        <span>身份验证</span><span></span>
      </div>
      <div class="box">
        <div>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名">
        </div>
        <div><span>身份证号</span>
          <input type="text" placeholder="请输入身份证号">
        </div>
        <div>
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div>
          <button>验证</button>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.auth {
  width: auto;
  height: auto;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    background: #FFF;
  }
  .box{
    margin-top: 15px;
    margin-bottom: 50px;
    padding: 30px;
    background: #FFF;
    width: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    div{
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        height: 35px;        
        padding-left: 15px;
        color: #666;
        border: 0;
      }
      button{
        width: 60%;   
        height: 35px;     
        border: 0;
        margin: 0 auto;
        background: #364f6b;
        color: #FFF;
        border-radius: 3px;
      }
    }
  }
}
</style>