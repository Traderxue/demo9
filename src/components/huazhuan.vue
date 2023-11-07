<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const perData = ref([
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "-19.63",
    up: 0,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "-19.63",
    up: 0,
  },
  {
    type: "BTC",
    time: "2022/10/23 19:50:03",
    open_price: "19462",
    profit: "+19.63",
    up: 1,
  },
]);

const goBack = () =>{
    router.back()
}
</script>

<template>
  <div class="huazhuan">
    <div class="position">
      <div class="top">
        <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
        <span>划转</span><span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.position {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    background: #FFF;
  }
}
</style>