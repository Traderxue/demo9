<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="tixian">
    <div class="top">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back_ios
      </span>
      <span>提现</span><span></span>
    </div>
    <div class="box">
      <div><span>提现数量(USDT)</span><input type="text" placeholder="0.00"></div>
      <div><span>请输入提现地址</span><input type="text" placeholder="提现地址"/></div>
      <div>
        <span>请选择公链</span>
        <select name="" id="">
          <option value="erc">ERC20</option>
          <option value="trc">TRC20</option>
          <option value="bsc">BSC20</option>
        </select>
      </div>
      <div>
        <button>提现</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tixian {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #FFF;
    margin-top: 15px;
    padding: 40px 0px;
    div{
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      input{
        padding-left: 15px;
        height: 35px;
        color: #666;
        border: 0;
      }
      button{
        width: 100%;
        height: 35px;
        border: 0;
        background: #364f6b;
        color: #FFF;
        width: 60%;
        margin: 0 auto;
        border-radius: 3px;
        font-size: 13px;
      }
      select{
        width: 30%;
        height: 35px;
        border: 0;
        outline: none;
      }
    }
  }
}
</style>