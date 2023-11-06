<script setup>
import { showToast } from "vant";
import { ref } from "vue";

const active = ref(0);

const loading = ref(false);

const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" route>
      <RouterView />
    </van-pull-refresh>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home"
        ><span class="material-symbols-outlined"> home </span><br /><span
          >首页</span
        >
      </van-tabbar-item>
      <van-tabbar-item to="/quotes">
        <span class="material-symbols-outlined"> monitoring </span><br /><span
          >行情</span
        >
      </van-tabbar-item>
      <van-tabbar-item to="/trade">
        <span class="material-symbols-outlined"> signal_cellular_alt </span
        ><br />
        <span>交易</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span><br>
        <span>钱包</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine"
        ><span class="material-symbols-outlined"> person </span> <br /><span
          >我的</span
        ></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  background: #f5f5f5;
  color: #333;
  font-size: 15px;
}
</style>